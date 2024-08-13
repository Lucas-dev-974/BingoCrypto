import { createSignal, onMount } from "solid-js";
import { CollectionFilter } from "./CollectionFilter";
import { GameList } from "./GameList";
import GameService from "../../services/GameService";
import { GameListItemProps } from "./GameListItem";
import { getAssetsUrl } from "../../utils/app.utils";

export function Games() {
  const [games, setGames] = createSignal<GameListItemProps[]>([])

  onMount(async () => {
    const response: GameListItemProps[] = await GameService.getGames()
    response.forEach(game => game.background = getAssetsUrl() + game.background)
    setGames(response)
  })

  return (
    <section class="collection-section padding-top padding-bottom">
      <div class="container">
        <div class="section-wrapper">
          <CollectionFilter />
          <GameList games={games()} />
        </div>
      </div>
    </section>
  );
}

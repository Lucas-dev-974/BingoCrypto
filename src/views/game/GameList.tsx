import { For } from "solid-js";
import { getAssetsUrl } from "../../utils/app.utils";
import { GameListItem, GameListItemProps } from "./GameListItem";

interface GameListProps {
  games: GameListItemProps[]
}

export function GameList(props: GameListProps) {
  return (
    <div class="row g-4 justify-content-center collection-grid">
      <For each={props.games}>{(game) => <GameListItem {...game} />}</For>
    </div>
  );
}

import { CollectionFilter } from "./CollectionFilter";
import { GameList } from "./GameList";

export function Games() {
  return (
    <section class="collection-section padding-top padding-bottom">
      <div class="container">
        <div class="section-wrapper">
          <CollectionFilter />
          <GameList />
        </div>
      </div>
    </section>
  );
}

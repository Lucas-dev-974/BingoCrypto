import { For } from "solid-js";
import { getAssetsUrl } from "../../utils/app.utils";
import { GameListItem, GameListItemProps } from "./GameListItem";

export function GameList() {
  const games: GameListItemProps[] = [
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/01.jpg",
      link: "/kine",
      name: "KINE",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/02.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/03.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/04.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/05.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/06.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/07.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/08.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/09.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
    {
      bgMediaUrl: getAssetsUrl() + "assets/images/jaqport/10.jpg",
      link: "#",
      name: "poker games",
      price: "$1,23,002",
    },
  ];

  return (
    <div class="row g-4 justify-content-center collection-grid">
      <For each={games}>{(game) => <GameListItem {...game} />}</For>
    </div>
  );
}

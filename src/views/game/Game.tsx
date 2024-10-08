import { JSXElement } from "solid-js";
import { Pageheader } from "../layout/PageHeader";
import { Games } from "./Games";

export function GameView(): JSXElement {

  return (
    <>
      <Pageheader
        breadcrumbTitle="MATCHE"
        pageHeaderTitle="jeux les plus populaires"
      />
      <Games />
    </>
  );
}

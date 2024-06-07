import { JSXElement } from "solid-js";
import { Text2 } from "../texts/Texte2";
import { Button } from "../buttons/Button";
import { AppPagesEnum, changePage } from "../../app.state";

import "./Navbar.css";

export function Navbar(): JSXElement {
  return (
    <nav class="navbar">
      <Text2 text="BingoCrypto" />
      <div class="flex gap-3 hide-on-mobile">
        <Button text="connexion" onClick={() => {}} />
        <Button text="jeux" onClick={() => changePage(AppPagesEnum.game)} />
      </div>
    </nav>
  );
}

import { Match, Switch, type JSXElement } from "solid-js";
import { AppPagesEnum, onPage } from "./app.state";
import { Home } from "./views/Home";
import { Navbar } from "./components/navbar/Navbar";
import { GameView } from "./views/game/Game";

export function App(): JSXElement {
  return (
    <main>
      <Navbar />

      <Switch>
        <Match when={onPage() == AppPagesEnum.home}>
          <Home />
        </Match>

        <Match when={onPage() == AppPagesEnum.game}>
          <GameView />
        </Match>
      </Switch>
    </main>
  );
}

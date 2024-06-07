import { JSXElement } from "solid-js";
import { PageLayout } from "../PageLayout";

export function GameView(): JSXElement {
  return (
    <div class="page-layout-full">
      <PageLayout>
        <p>Game page</p>
      </PageLayout>
    </div>
  );
}

import { JSXElement } from "solid-js";
import { PageLayout } from "./PageLayout";

export function Home(): JSXElement {
  return (
    <div class="page-layout-full">
      <PageLayout>
        <div class="text-white flex justify-around  flex-wrap">
          <div class="left w-full px- | md:w-2/4 | lg:px-12">
            <p>Lorem ipsum....</p>
          </div>

          <div class="right w-full px- | md:w-2/4 | lg:px-12">lorem</div>
        </div>
      </PageLayout>
    </div>
  );
}

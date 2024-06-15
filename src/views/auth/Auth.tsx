import { PageLayout } from "../PageLayout";
import { Login } from "./Login";

export function Auth() {
  return (
    <div class="page-layout-full">
      {/* <PageLayout> */}
      <div class="w-full h-full flex flex-col items-center justify-center">
        <Login />
      </div>
      {/* </PageLayout> */}
    </div>
  );
}

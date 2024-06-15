// * states of app like Type, Enum ...

import { createSignal } from "solid-js";

export enum AppPagesEnum {
  home = "acceuil",
  game = "jeux",
  auth = "authentification",
}

export const [onPage, setPage] = createSignal<AppPagesEnum>(AppPagesEnum.home);

export function changePage(page: AppPagesEnum): void {
  window.history.pushState({}, "", "/" + page.toString());
  setPage(page);
}

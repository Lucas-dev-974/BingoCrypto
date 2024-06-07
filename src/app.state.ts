// * states of app like Type, Enum ...

import { createSignal } from "solid-js";


export enum AppPagesEnum {
    home,
    game
}

export const [onPage, setPage] = createSignal<AppPagesEnum>(AppPagesEnum.home)

export function changePage(page: AppPagesEnum): void {
    setPage(page)
}
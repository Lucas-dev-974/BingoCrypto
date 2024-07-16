import { Pageheader } from "../layout/PageHeader";
import { ShopPage } from "./ShopPage";

export function Shop() {
  return (
    <>
      <Pageheader breadcrumbTitle="boutique" pageHeaderTitle="boutique" />
      <ShopPage />
    </>
  );
}

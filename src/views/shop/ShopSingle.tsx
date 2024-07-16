import { Pageheader } from "../layout/PageHeader";
import { ProductDetails } from "./ProductDetails";

export function ShopSingle() {
  return (
    <>
      <Pageheader
        breadcrumbTitle="détails produit"
        pageHeaderTitle="détails produit"
      />
      <ProductDetails />
    </>
  );
}

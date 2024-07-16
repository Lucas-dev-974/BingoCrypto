import { Pageheader } from "../layout/PageHeader";
import { PartnerList } from "./PartnerList";

export function Partner() {
  return (
    <>
      <Pageheader
        pageHeaderTitle="Nos partenaires"
        breadcrumbTitle="PARTNERS"
      />

      <PartnerList />
    </>
  );
}

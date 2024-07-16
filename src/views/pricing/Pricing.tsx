import { Pageheader } from "../layout/PageHeader";
import { PricingPlan } from "./PricingPlans";

export function Pricing() {
  return (
    <>
      <Pageheader
        breadcrumbTitle="NIVEAU D'ADHÉSION"
        pageHeaderTitle="NIVEAU D'ADHÉSION"
      />
      <PricingPlan />
    </>
  );
}

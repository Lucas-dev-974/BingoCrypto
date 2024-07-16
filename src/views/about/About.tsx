import { Pageheader } from "../layout/PageHeader";
import { AboutSection } from "./AboutSection";
import { Faq } from "./Faq";
import { GameSection } from "./GameSection";

export function About() {
  return (
    <>
      <Pageheader
        pageHeaderTitle="à propos du casino"
        breadcrumbTitle="à propos"
      />
      <AboutSection />
      <GameSection />
      <Faq />
    </>
  );
}

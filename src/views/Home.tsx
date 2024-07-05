import { JSXElement } from "solid-js";
import { PageLayout } from "./PageLayout";
import { CounterGains } from "./home/CounterGains";
import { Banner } from "./home/Banner";
import { Collection } from "./home/Collection";
import { Jakpot } from "./home/Jakpot";
import { Collection2 } from "./home/Collection2";
import { GameHomeSection } from "./home/Game";
import { Faq } from "./home/Faq";
import { GameSection2 } from "./home/GameSection2";
import { Testimonial } from "./home/Testimonial";

export function Home(): JSXElement {
  return (
    <>
      <Banner />
      <CounterGains />
      <Collection />
      <Jakpot />
      <Collection2 />
      <GameHomeSection />
      <Faq />
      <GameSection2 />
      <Testimonial />
    </>
  );
}

import { type JSXElement } from "solid-js";
import { Home } from "./views/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Notifications } from "./services/Notification";
import { Router, Route } from "@solidjs/router";

import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/lightcase.css";
import "./assets/css/odometer.css";
import "./assets/css/style.min.css";
import "./assets/css/swiper.min.css";

import { Footer } from "./components/footer/Footer";
import { getAssetsUrl } from "./utils/app.utils";
import { AuthPage } from "./views/auth/AuthPage";
import { Contact } from "./views/contact/Contact";
import { About } from "./views/about/About";
import { GameView } from "./views/game/Game";
import { Jakpot } from "./views/jakpot/Jakpot";
import { Partner } from "./views/partner/Partner";
import { Pricing } from "./views/pricing/Pricing";
import { Shop } from "./views/shop/Shop";
import { ShopSingle } from "./views/shop/ShopSingle";

function BodyShape() {
  return (
    <div class="body-shape">
      <img
        src={getAssetsUrl() + "assets/images/shape/body-shape.png"}
        alt="shape"
      />
    </div>
  );
}

export function App(): JSXElement {
  return (
    <main class="js sizes customelements history pointerevents postmessage postmessage-structuredclones webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox picture srcset webworkers">
      <Navbar />
      <Notifications />
      <BodyShape />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/games" component={GameView} />
        <Route path="/jakpot" component={Jakpot} />
        <Route path="/partner" component={Partner} />
        <Route path="/pricing-plan" component={Pricing} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop-single" component={ShopSingle} />
      </Router>
      <Footer />
    </main>
  );
}

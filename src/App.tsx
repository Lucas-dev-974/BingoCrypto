import { Match, Switch, type JSXElement } from "solid-js";
import { AppPagesEnum, onPage } from "./app.state";
import { Home } from "./views/Home";
import { Navbar } from "./components/navbar/Navbar";
import { GameView } from "./views/game/Game";
import { Notifications } from "./services/Notification";
import authUtils from "./utils/auth.utils";
import { Router, Route } from "@solidjs/router";

import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/lightcase.css";
import "./assets/css/odometer.css";
import "./assets/css/style.min.css";
import { Login } from "./views/auth/Login";
import { Register } from "./views/auth/Register";
import { Footer } from "./components/footer/Footer";
import { getAssetsUrl } from "./utils/app.utils";

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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
      <Footer />
    </main>
  );
}

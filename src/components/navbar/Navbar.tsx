import { JSXElement } from "solid-js";

import "./Navbar.css";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";

export function Navbar(): JSXElement {
  return (
    <nav class="header-section">
      <div class="container mx-auto">
        <div class="header-holder d-flex flex-wrap justify-content-between align-items-center">
          <NavbarLogo />
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
}

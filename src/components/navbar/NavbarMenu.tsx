import { NavbarMenuBottom } from "./navbar-menu/NavbarMenuBottom";
import { NavbarMenuTop } from "./navbar-menu/NavbarMenuTop";

export function NavbarMenu() {
  return (
    <div class="header-menu-part">
      <NavbarMenuTop />
      <NavbarMenuBottom />
    </div>
  );
}

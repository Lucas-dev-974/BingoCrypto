import { For, onMount, Show } from "solid-js";
import {
  NavbarDropdownItem,
  NavbarDropdownItemProps,
} from "../navbar-dropdown-item/NavbarDropdownItem";
import StoreService from "../../../services/StoreService";
import authUtils from "../../../utils/auth.utils";

export function NavbarMenuItem() {
  const menuItems: NavbarDropdownItemProps[] = [
    {
      title: "Acceuil",
      link: "/",
    },
    {
      title: "Jeux",
      link: "/games",
    },
    {
      title: "Features",
      options: [
        {
          title: "A propos",
          link: "/",
        },
        {
          title: "Casino Jackpots",
          link: "/jakpot",
        },
        {
          title: "Jeux",
          link: "/games",
        },
        {
          title: "Partenaires",
          link: "/partners",
        },
        {
          title: "Plan des prix",
          link: "/pricing-plan",
        },
        {
          title: "Compte",
          options: [
            {
              title: "Connexion",
              link: "/login",
            },
            {
              title: "Enregistrement",
              link: "/register",
            },
          ],
        },
        {
          title: "Boutique",
          options: [
            {
              title: "boutique",
              link: "/shop",
            },
            {
              title: "Panier",
              link: "/cart ",
            },
          ],
        },
      ],
    },
    {
      title: "contact",
      link: "/contact",
    },
  ];

  const LogoutComponent = () => (
    <a href="logout" class="signup" onClick={authUtils.logout}>
      <i class="icofont-users"></i> <span>se déconnecter</span>
    </a>
  );

  return (
    <div class="menu-area">
      <ul class="menu">
        <For each={menuItems}>{(item) => <NavbarDropdownItem {...item} />}</For>
      </ul>

      <Show when={!StoreService.proxy.isLogin} fallback={<LogoutComponent />}>
        <a href="login" class="login">
          <i class="icofont-user"></i> <span>connexion</span>{" "}
        </a>
        <a href="register" class="signup">
          <i class="icofont-users"></i> <span>inscription</span>
        </a>
      </Show>

      <div class="header-bar d-lg-none">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="ellepsis-bar d-lg-none">
        <i class="icofont-info-square"></i>
      </div>
    </div>
  );
}

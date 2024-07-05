export function NavbarMenuBottom() {
  return (
    <div class="header-bottom">
      <div class="header-wrapper justify-content-lg-end">
        <div class="mobile-logo d-lg-none">
          <a href="index.html">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div class="menu-area">
          <ul class="menu">
            <li class="menu-item-has-children">
              <a href="#0">Accueil</a>
              <ul class="submenu">
                <li>
                  <a href="index.html" class="active">
                    Home Page One
                  </a>
                </li>
                <li>
                  <a href="index-2.html">Home Page Two</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#0">Jeux</a>
              <ul class="submenu">
                <li>
                  <a href="game-list.html">game list 1</a>
                </li>
                <li>
                  <a href="game-list2.html">game list 2</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="#0">Features</a>
              <ul class="submenu">
                <li>
                  <a href="about.html">A propos</a>
                </li>
                <li>
                  <a href="jaqpot.html">Casino Jackpot</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#0">jeux</a>
                  <ul class="submenu">
                    <li>
                      <a href="game-list.html">game list 1</a>
                    </li>
                    <li>
                      <a href="game-list2.html">game list 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="partners.html">partenaires</a>
                </li>
                <li>
                  <a href="pricing-plan.html">Pricing Plan</a>
                </li>

                <li class="menu-item-has-children">
                  <a href="#0">accounts</a>
                  <ul class="submenu">
                    <li>
                      <a href="login.html">login</a>
                    </li>
                    <li>
                      <a href="signup.html">signup</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="#0">Shop</a>
                  <ul class="submenu">
                    <li>
                      <a href="shop.html">shop</a>
                    </li>
                    <li>
                      <a href="shop-single.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="cart-page.html">Cart Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="404.html">404 Page</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <a href="login" class="login">
            <i class="icofont-user"></i> <span>SECONNECTER</span>{" "}
          </a>
          <a href="signup.html" class="signup">
            <i class="icofont-users"></i> <span>S'INSCRIRE</span>
          </a>

          <div class="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="ellepsis-bar d-lg-none">
            <i class="icofont-info-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

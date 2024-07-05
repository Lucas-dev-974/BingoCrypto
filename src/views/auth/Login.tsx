import { createSignal } from "solid-js";

import { getAssetsUrl } from "../../utils/app.utils";

export function Login() {
  return (
    <>
      <section
        class="pageheader-section"
        style={
          "background-image: url(" +
          getAssetsUrl() +
          "assets/images/pageheader/bg.jpg);"
        }
      >
        <div class="container">
          <div class="section-wrapper text-center text-uppercase">
            <h2 class="pageheader-title">Se connecter pour jouer</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item">
                  <a href="index.html">Accueil</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Se connecter
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div class="login-section padding-top padding-bottom">
        <div class=" container">
          <div class="account-wrapper">
            <h3 class="title">Se connecter </h3>
            <form class="account-form text-start">
              <div class="form-group">
                <label>Nom d'utilisateur :</label>
                <input type="text" name="username" />
              </div>
              <div class="form-group">
                <label>Mot de passe :</label>
                <input type="password" name="password" />
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div class="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label for="remember">Se souvenir de moi</label>
                  </div>
                  <a href="#">Mot de passe oublié ?</a>
                </div>
              </div>
              <div class="form-group">
                <button class="d-block default-button">
                  <span>Envoyé</span>
                </button>
              </div>
            </form>
            <div class="account-bottom">
              <span class="d-block cate pt-10">
                Vous n'avez pas de compte ?{" "}
                <a href="signup.html"> Inscrivez-vous</a>
              </span>
              <span class="or">
                <span>or</span>
              </span>
              <h5 class="subtitle">Se connecter avec les réseaux sociaux</h5>
              <ul class="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                <li>
                  <a href="#">
                    <img
                      src={getAssetsUrl() + "assets/images/match/social-1.png"}
                      alt="vimeo"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={getAssetsUrl() + "assets/images/match/social-2.png"}
                      alt="youtube"
                    />
                  </a>
                  z
                </li>
                <li>
                  <a href="#">
                    <img
                      src={getAssetsUrl() + "assets/images/match/social-3.png"}
                      alt="twitch"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

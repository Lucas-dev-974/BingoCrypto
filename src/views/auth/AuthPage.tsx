import { createEffect, createSignal, onMount, Show } from "solid-js";
import { getAssetsUrl } from "../../utils/app.utils";
import { Login } from "./Login";
import { Register } from "./Register";
import { useLocation } from "@solidjs/router";
import { Pageheader } from "../layout/PageHeader";

enum AuthPages {
  login,
  register,
}

export function AuthPage() {
  const [onAuthPage, setOnAuthPage] = createSignal<AuthPages>(AuthPages.login);
  const location = useLocation();

  createEffect(() => {
    if (location.pathname.includes("login")) setOnAuthPage(AuthPages.login);
    else setOnAuthPage(AuthPages.register);
  });

  return (
    <>
      <Pageheader
        pageHeaderTitle={
          onAuthPage() == AuthPages.login
            ? "Se connecter pour jouer"
            : "PAGE D'INSCRIPTION"
        }
        breadcrumbTitle={
          onAuthPage() == AuthPages.login ? "Se connecter" : "INSCRIPTION"
        }
      />

      <div class="login-section padding-top padding-bottom">
        <div class=" container">
          <div class="account-wrapper">
            <h3 class="title">
              {onAuthPage() == AuthPages.login ? "Se connecter" : "Inscription"}
            </h3>
            <Show
              when={onAuthPage() == AuthPages.login}
              fallback={<Register />}
            >
              <Login />
            </Show>

            <div class="account-bottom">
              <span class="d-block cate pt-10">
                Vous n'avez pas de compte ?
                <Show
                  when={onAuthPage() == AuthPages.login}
                  fallback={<a href="login"> Se connecter</a>}
                >
                  <a href="register"> Inscrivez-vous</a>
                </Show>
              </span>
              <span class="or">
                <span>or</span>
              </span>
              <Show
                when={onAuthPage() == AuthPages.login}
                fallback={
                  <h5 class="subtitle">S'inscrire avec les réseaux sociaux</h5>
                }
              >
                <h5 class="subtitle">Se connecter avec les réseaux sociaux</h5>
              </Show>

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

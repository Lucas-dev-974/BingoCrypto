import { createSignal } from "solid-js";

import { pushNotif } from "../../services/Notification";
import AuthService from "../../services/AuthService";

export function Login() {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [remember, setRemember] = createSignal<boolean>(false);

  async function login() {
    console.log("login");

    if (email().length > 0 && password().length > 0) {
      // Todo send login request
      await AuthService.login(email(), password());

      location.href = "/";
    } else {
      pushNotif({
        content: "Veuillez remplir touts les champ du formulaire",
        type: "error",
      });
    }
  }

  async function requestResetPassword() {
    if (email().length == 0) {
      return pushNotif({
        content: "Veuillez remplir le champ email",
        type: "error",
      });
    }

    const response = await AuthService.requestReset(email());
    return pushNotif({
      content: response,
      type: "info",
    });
  }

  return (
    <div class="account-form text-start">
      <div class="form-group">
        <label>Email :</label>
        <input
          class="text-dark"
          type="email"
          name="username"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Mot de passe :</label>
        <input
          class="text-dark"
          type="password"
          name="password"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="form-group">
        <div class="d-flex justify-content-between flex-wrap pt-sm-2">
          <div class="checkgroup">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={remember()}
            />
            <label for="remember">Se souvenir de moi</label>
          </div>
          <a onClick={requestResetPassword}>Mot de passe oublié ?</a>
        </div>
      </div>
      <div class="form-group">
        <button class="d-block default-button" onClick={login}>
          <span>Envoyé</span>
        </button>
      </div>
    </div>
  );
}

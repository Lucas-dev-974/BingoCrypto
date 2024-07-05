import { createSignal } from "solid-js";
import { Button } from "../../components/buttons/default-button/Button";
import { InputText } from "../../components/inputs/InputText";
import { Text2 } from "../../components/texts/Texte2";
import AuthService from "../../services/AuthService";
import { pushNotif } from "../../services/Notification";
import { AppPagesEnum, changePage } from "../../app.state";

import StoreService from "../../services/StoreService";

export function Register() {
  return <section></section>;
}

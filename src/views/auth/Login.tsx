import { Button } from "../../components/buttons/Button";
import { InputText } from "../../components/inputs/InputText";
import { Text2 } from "../../components/texts/Texte2";

export function Login() {
  return (
    <div class="bg-slate-100 p-2 rounded-sm">
      <Text2 text="Se connecter à BingoReunion" dark />

      <InputText
        placeholder="email"
        onInput={(e: InputEvent & { target: HTMLInputElement }) => {
          console.log("input:", e.target.value);
        }}
      />

      <InputText
        password
        placeholder="password"
        onInput={(e: InputEvent & { target: HTMLInputElement }) => {
          console.log("input:", e.target.value);
        }}
      />

      <Button onClick={() => {}} text="Connexion" />
    </div>
  );
}

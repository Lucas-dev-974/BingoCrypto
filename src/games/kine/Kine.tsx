import { Button } from "../../components/buttons/default-button/Button";
import GameService from "../../services/GameService";
import { Pageheader } from "../../views/layout/PageHeader";

export function KineGame() {
  async function generateRandomNumber() {
    const response = await GameService.generateRandomNumber();
    console.log("response:", response);
  }

  async function generateRandomCard() {
    const response = await GameService.generateBingoCard();
    console.log("response:", response);
  }

  async function enterInRoom() {
    const response = await GameService.EnterRoom();
    console.log("response:", response);
  }

  return (
    <div>
      <Pageheader breadcrumbTitle="kine" pageHeaderTitle="kine" />

      <div class="jaqport padding-top padding-bottom">
        <div class="container">
          <Button
            onClick={generateRandomNumber}
            text="generer nombre aléatoire"
          />
          <Button onClick={generateRandomCard} text="generer carte bingo" />
          <Button onClick={enterInRoom} text="entrer dans une room" />
          <Button
            onClick={generateRandomNumber}
            text="afficher l'état de la room"
          />
        </div>
      </div>
    </div>
  );
}

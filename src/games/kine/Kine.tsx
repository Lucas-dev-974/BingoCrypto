import { createSignal, onMount } from "solid-js";
import { Button } from "../../components/buttons/default-button/Button";
import GameService from "../../services/GameService";
import { Pageheader } from "../../views/layout/PageHeader";
import { SocketServices } from "../../services/SocketService";

export function KineGame() {
  const [kineRooms, setKineRooms] = createSignal([]);

  onMount(async () => {
    const rooms = await GameService.getAvailableKineRoom();
    console.log("rooms kine:", rooms);
  });
  async function generateRandomNumber() {
    const response = await GameService.generateRandomNumber();
    console.log("response:", response);
  }

  async function generateRandomCard() {
    const response = await GameService.generateBingoCard();
    console.log("response:", response);
  }

  async function searchRoom() {
    SocketServices.sendMessage("teste from client");
    SocketServices.search();
    // const response = await GameService.EnterRoom();
    // console.log("response:", response);
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
          <Button onClick={searchRoom} text="entrer dans une room" />
          <Button
            onClick={generateRandomNumber}
            text="afficher l'état de la room"
          />

          <Button
            onClick={() => SocketServices.printClient()}
            text="print-client"
          />
        </div>
      </div>
    </div>
  );
}

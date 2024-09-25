import RequestService from "./RequestService";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3002");
socket.connect();

class GameService {
  public async generateRandomNumber() {
    return await RequestService.get("/game/random-number");
  }

  public async generateBingoCard() {
    return await RequestService.get("/game/generate-card");
  }

  public async EnterRoom() {
    socket.emit("message", {
      message: "teste",
      nick: "oui",
    });
  }

  public async getAvailableKineRoom() {
    return await RequestService.get("/game/kine-room");
  }
}

export default new GameService();

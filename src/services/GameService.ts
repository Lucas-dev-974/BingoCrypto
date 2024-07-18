import RequestService from "./RequestService";

const socket = new WebSocket("http://localhost:3001");

// socket.addEventListener("open", (event) => {
//   console.log(event);
// });

class GameService {
  public async generateRandomNumber() {
    return await RequestService.get("/game/random-number");
  }

  public async generateBingoCard() {
    return await RequestService.get("/game/generate-card");
  }

  public async EnterRoom() {
    return "ok";
  }

  public async showRoomState() {}
  //   public async;
}

export default new GameService();

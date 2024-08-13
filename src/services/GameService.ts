import RequestService from "./RequestService";

class GameService {
  public async generateRandomNumber() {
    return await RequestService.get("/game/random-number");
  }

  public async generateBingoCard() {
    return await RequestService.get("/game/generate-card");
  }

  public async getGames() {
    return await RequestService.get('/game/games-list')
  }

  public async getRoomsForGame(game: string) {
    return await RequestService.get("/game/rooms?gameName=KINE")
  }
}

export default new GameService();

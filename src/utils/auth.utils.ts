import AuthService from "../services/AuthService";

class AuthUtils {
  public async IsLoggedIn() {
    const response = await AuthService.checkToken();
  }
}

export default new AuthUtils();

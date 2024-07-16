import AuthService from "../services/AuthService";
import StoreService from "../services/StoreService";

class AuthUtils {
  public async IsLoggedIn() {
    const response = await AuthService.checkToken();
  }

  public logout() {
    StoreService.proxy.user = undefined;
    StoreService.proxy.isLogin = false;
    location.href = "/";
  }
}

export default new AuthUtils();

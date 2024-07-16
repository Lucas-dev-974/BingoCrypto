import { pushNotif } from "./Notification";
import RequestService from "./RequestService";
import StoreService, { UserType } from "./StoreService";

class AuthService {
  public async login(email: string, password: string): Promise<UserType> {
    const response: UserType = await RequestService.post("/auth/login", {
      email: email,
      password: password,
    });

    StoreService.proxy.isLogin = true;
    StoreService.proxy.user = response;

    if (!response.emailVerified)
      pushNotif({
        content: "Veuillez confirmer votre email.",
        type: "info",
      });

    return response;
  }

  public async register(name: string, email: string, password: string) {
    const response: UserType = await RequestService.patch("/auth/register", {
      name: name,
      email: email,
      password: password,
    });

    StoreService.proxy.user = response;
    return response;
  }

  public async checkToken() {
    return await RequestService.get(
      "/auth/token-check?token=" + StoreService.proxy.user?.token
    );
  }

  public async requestReset(email: string) {
    return await RequestService.post("/auth/request-reset", { email: email });
  }
}

export default new AuthService();

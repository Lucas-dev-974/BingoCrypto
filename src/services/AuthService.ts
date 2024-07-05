import RequestService from "./RequestService";
import StoreService, { UserType } from "./StoreService";

class AuthService {
  public async login(email: string, password: string): Promise<UserType> {
    const response: UserType = await RequestService.post("/auth/login", {
      email: email,
      password: password,
    });

    StoreService.proxy.user = response;
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
}

export default new AuthService();

import RequestService from "./RequestService";

class AuthService {
  public async login(email: string, password: string) {
    const response = await RequestService.post("/auth/login", {
      email: email,
      password: password,
    });

    console.log("response login:", response);

    return response;
  }
}

export default new AuthService();

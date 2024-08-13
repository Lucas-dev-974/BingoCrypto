import { pushNotif } from "./Notification";
import StoreService from "./StoreService";

class RequestService {
  public host: string = "";

  constructor() {
    if (document.URL.includes("localhost" || "127.0.0.1"))
      this.host = "http://localhost:3001/api";
    else this.host = "";
  }

  public async get(url: string) {
    return await this.request(url, {
      method: "GET",
    });
  }

  public async post(url: string, data: object) {
    return await this.request(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  public async patch(url: string, data: object) {
    return await this.request(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  public async delete(url: string) {
    return await this.request(url, {
      method: "DELETE",
    });
  }

  private async request(url: string, options: RequestInit) {
    console.log("STORE user:", StoreService.proxy.user?.token);

    const bearer = "Bearer " + StoreService.proxy.user?.token;
    return await this.manageError(
      await fetch(this.host + url, {
        ...options,
        headers: { "Content-Type": "application/json", Authorization: bearer },
      })
    );
  }

  private async manageError(response: Response) {
    const json = await response.json();
    if (response.status != 200) {
      console.log("error manager:", json, json.message);
      let notif: string;

      if (typeof json == "string") {
        pushNotif({
          content: json,
          type: "error",
        });
      }
      if (json.message) {
        throw json.message;
      }
      // * todo: review this part of code
      // let notificationContent = "";

      // Object.keys(json).forEach((obj, value) => {
      //   json[obj].forEach((elem: string) => (notificationContent += elem));
      // });

      throw json;
    }

    return json;
  }
}

export default new RequestService();

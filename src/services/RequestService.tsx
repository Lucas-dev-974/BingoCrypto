import { pushNotif } from "./Notification";

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

  public async patch(url: string, data: JSON) {
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
    return await this.manageError(
      await fetch(this.host + url, {
        ...options,
        headers: { "Content-Type": "application/json" },
      })
    );
  }

  private async manageError(response: Response) {
    const json = await response.json();
    if (response.status != 200) {
      // * todo: review this part of code
      let notificationContent = "";
      Object.keys(json).forEach((obj, value) => {
        json[obj].forEach((elem: string) => (notificationContent += elem));
      });

      pushNotif({ content: notificationContent, type: "info" });
      return json;
    }

    return json;
  }
}

export default new RequestService();

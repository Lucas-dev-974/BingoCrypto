class StoreService {
  public data: StoreDataType = {
    user: undefined,
  };

  public proxy = new Proxy(this.data, {
    get(target, property, receiver) {
      console.log(`Getting property`, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      const toReturn = Reflect.set(target, property, value, receiver);
      localStorage.setItem("store", JSON.stringify(target));
      return toReturn;
    },
  });

  constructor() {
    if (this.getStore().user!.id != 0) {
      this.proxy.user = this.getStore().user;
    }
  }

  getStore(): StoreDataType {
    return JSON.parse(localStorage.getItem("store") as string) as StoreDataType;
  }

  setState() {
    localStorage.setItem("store", JSON.stringify(this.proxy));
  }
}

export type UserType = {
  id: number;
  name: string;
  email: string;
  token: string;
  emailVerified: boolean;
};

type StoreDataType = {
  user: UserType | undefined;
};

export default new StoreService();

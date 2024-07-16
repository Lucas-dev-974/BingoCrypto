class StoreService {
  public data: StoreDataType = {
    user: undefined,
    isLogin: undefined,
  };

  public proxy = new Proxy(this.data, {
    get(target, property, receiver) {
      console.log(`Getting property`, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      console.log("set property:", property, target, value);

      const toReturn = Reflect.set(target, property, value, receiver);
      localStorage.setItem("store", JSON.stringify(target));
      return toReturn;
    },
  });

  constructor() {
    if (!this.getStore()) this.setState();
    const storeData = this.getStore();

    if (this.getStore().user && this.getStore().user!.id != 0)
      this.proxy.user = this.getStore().user;

    this.proxy.isLogin = storeData.isLogin;
  }

  getStore(): StoreDataType {
    return JSON.parse(localStorage.getItem("store") as string) as StoreDataType;
  }

  setState() {
    localStorage.setItem("store", JSON.stringify(this.proxy));
  }
}

export enum GenderEnum {
  male = "male",
  female = "female",
  other = "other",
}

export type UserType = {
  id: number;
  name: string;
  lastName: string;
  email: string;

  token: string;
  emailVerified: boolean;

  gender: GenderEnum;
  birthday: Date;

  country: string;
  city: string;
  postal: number;
  phone: string;
};

type StoreDataType = {
  user: UserType | undefined;
  isLogin: boolean | undefined;
};

export default new StoreService();

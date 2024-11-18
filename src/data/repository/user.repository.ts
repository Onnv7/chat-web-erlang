import { LoginAccountEntity } from "../../domain/entity/login.entity";
import {
  LoginAccountRequest,
  RegisterAccountRequest,
} from "../model/request/user.request";
import { UserAPI } from "../api/user.api";
import { AuthLocalStorage } from "../local/auth.localstorage";
import { LoginAccountResponse } from "../model/response/user.response";
import { RegisterAccountEntity } from "../../domain/entity/register.entity";

export class UserRepository {
  constructor(
    private userAPI: UserAPI,
    private authLocalStorage: AuthLocalStorage
  ) {}

  async loginAccount(entity: LoginAccountEntity) {
    const body: LoginAccountRequest = {
      username: entity.username,
      password: entity.password,
    };
    const data = await this.userAPI.loginAccount(body);
    return data;
  }

  async registerAccount(data: RegisterAccountEntity) {
    const body: RegisterAccountRequest = {
      username: data.username,
      password: data.password,
    };
    await this.userAPI.registerAccount(body);
  }

  getUserId() {
    return this.authLocalStorage.getUserId();
  }
  savingUserAuth(data: LoginAccountResponse) {
    console.log("🚀 ~ UserRepository ~ savingUserAuth ~ data:", data);
    this.authLocalStorage.saveCredentials(data);
  }
}

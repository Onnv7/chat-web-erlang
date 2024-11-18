import { http } from "../../common/config/http.config";
import {
  RegisterAccountRequest,
  LoginAccountRequest,
} from "../model/request/user.request";
import { LoginAccountResponse } from "../model/response/user.response";

export class UserAPI {
  constructor() {}

  async registerAccount(body: RegisterAccountRequest) {
    const responseData = (await http.post("/user/register", body)).data;
    return responseData.data;
  }

  async loginAccount(body: LoginAccountRequest): Promise<LoginAccountResponse> {
    const responseData = (await http.post("/user/login", body)).data;
    return responseData.data;
  }
}

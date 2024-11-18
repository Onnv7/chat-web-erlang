import { LoginAccountResponse } from "../model/response/user.response";

export class AuthLocalStorage {
  constructor() {}

  saveCredentials(credential: LoginAccountResponse) {
    localStorage.setItem("user-id", credential.userId.toString());
    localStorage.setItem("accessToken", credential.accessToken);
  }
  getUserId() {
    return localStorage.getItem("user-id");
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  clearCredentials() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("accessToken");
  }
}

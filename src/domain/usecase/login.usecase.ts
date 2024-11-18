import { httpAuth } from "../../common/config/http.config";
import { userRepository } from "../../data/repository";
import { LoginAccountEntity } from "../entity/login.entity";

export async function loginAccount(entity: LoginAccountEntity) {
  const data = await userRepository.loginAccount(entity);
  userRepository.savingUserAuth(data);
  httpAuth.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${data.accessToken}`;
  return data;
}

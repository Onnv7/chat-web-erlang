import { userRepository } from "../../data/repository";
import { RegisterAccountEntity } from "../entity/register.entity";

export async function registerAccount(entity: RegisterAccountEntity) {
  const data = await userRepository.registerAccount(entity);
}

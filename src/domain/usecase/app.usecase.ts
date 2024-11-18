import { userRepository } from "../../data/repository";

export function getUserIdLocal() {
  return Number(userRepository.getUserId());
}

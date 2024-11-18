import { roomRepository } from "../../data/repository";

export function getRoomList(userId: number) {
  return roomRepository.getRoomList(userId);
}

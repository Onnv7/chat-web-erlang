import { ConversationEntity } from "../../domain/entity/conversation.entity";
import { RoomAPI } from "../api/room.api";

export class RoomRepository {
  constructor(private roomApi: RoomAPI) {}

  async getRoomList(userId: number) {
    const data = await this.roomApi.getRoomList(userId);
    return data as ConversationEntity[];
  }
}

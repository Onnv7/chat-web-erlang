import { http } from "../../common/config/http.config";
import { GetRoomListResponse } from "../model/response/room.response";

export class RoomAPI {
  async getRoomList(userId: number): Promise<GetRoomListResponse[]> {
    const responseData = (await http.get(`/room/user/${userId}`)).data;
    return responseData.data;
  }
}

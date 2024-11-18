import { RoomAPI } from "../api/room.api";
import { UserAPI } from "../api/user.api";
import { AuthLocalStorage } from "../local/auth.localstorage";
import { RoomRepository } from "./room.repository";
import { UserRepository } from "./user.repository";

const userApi = new UserAPI();
const authLocalStorage = new AuthLocalStorage();
const userRepository = new UserRepository(userApi, authLocalStorage);

const roomApi = new RoomAPI();
const roomRepository = new RoomRepository(roomApi);

export { userRepository, roomRepository };

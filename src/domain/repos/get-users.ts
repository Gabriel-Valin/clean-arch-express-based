import { UserDTO } from "../dtos/user";

export interface GetUsers {
    allUsers(): Promise<UserDTO[]>
}
import { UserDTO } from "../dtos/user";
import { ServiceProtocol } from "../protocols/service";
import { GetUsers } from "../repos/get-users";

export default class GetAllUsersService implements ServiceProtocol<null, Promise<UserDTO[]>> {
    constructor (private readonly usersRepository: GetUsers) {}

    async perform(): Promise<UserDTO[]> {
        const all = await this.usersRepository.allUsers()
        return all
    }
}
import { User } from "@prisma/client";
import { UserDTO } from "../../../../domain/dtos/user";
import { GetUsers } from "../../../../domain/repos/get-users";
import { prismaConnection } from "../client";

export default class UserRepository implements GetUsers {
    async allUsers(): Promise<UserDTO[]> {
        let content: UserDTO[] = []
        let user: User
        const resultUser = await prismaConnection.user.findMany()
        
        for (user of resultUser) {
            content.push(user)
        }
        
        return content
    }
}
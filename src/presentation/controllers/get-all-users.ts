import { Request, Response } from "express";
import { UserDTO } from "../../domain/dtos/user";
import { ServiceProtocol } from "../../domain/protocols/service";
import { ApplicationError } from "../../main/errors/application-error";

export default class GetAllUsersController {
    constructor (private readonly getUserServices: ServiceProtocol<null, Promise<UserDTO[]>>) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const result = await this.getUserServices.perform()
        return res.status(200).json(result)
    }
}
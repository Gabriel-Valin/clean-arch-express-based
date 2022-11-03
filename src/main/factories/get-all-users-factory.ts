import { Request, Response } from "express";
import GetAllUsersService from "../../domain/services/get-all-users-service";
import UserRepository from "../../infra/db/prisma/repositories/user-repository";
import GetAllUsersController from "../../presentation/controllers/get-all-users";

export const getAllUsersFactory = (req: Request, res: Response) => {
    const repository = new UserRepository()
    const service = new GetAllUsersService(repository)
    const controller = new GetAllUsersController(service)
    return controller.handle(req, res)
}
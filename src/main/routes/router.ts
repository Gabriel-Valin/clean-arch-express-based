import { Router, Request, Response } from "express";
import { getAllUsersFactory } from "../factories/get-all-users-factory";

export const mainRouter = Router()

mainRouter.get('/get-users', getAllUsersFactory)
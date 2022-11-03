import { ApplicationError } from "../errors/application-error";
import { Request, Response, NextFunction } from 'express'

export const internalServerMiddleware = (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof ApplicationError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
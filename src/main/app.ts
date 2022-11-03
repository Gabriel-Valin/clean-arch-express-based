import express, { Request, Response, NextFunction } from 'express'
import { ApplicationError } from './errors/application-error';
import { internalServerMiddleware } from './middlewares/internal-server-error';
import { mainRouter } from './routes/router'

export const app = express()

app.use(express.json())
app.use(mainRouter)
app.use(internalServerMiddleware)

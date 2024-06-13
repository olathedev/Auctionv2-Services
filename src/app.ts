import express, { Application } from "express"
import mongoose from "mongoose"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import Controller from './utils/types/controller.types'
import helmet from "helmet"
import { Enviroment } from "./utils/config/env.config"
import errorHandler from "./middlewares/error.middelwares"
import { connectDb } from "./utils/setup/database"
import notFound from "./middlewares/notFound.middleware"


class App {
    app: Application;
    port: number

    constructor(controllers: Controller[], port: number) {
        this.app = express()
        this.port = port
        this.initMiddleware()
        this.initControllers(controllers)
        this.initNotFound();
        this.initErrorHandler();
    }

    private initMiddleware(): void {
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(compression())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

    private initControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.app.use('/api/v1', controller.router)
        })
    }

    private initNotFound(): void {
        this.app.use(notFound)
    }

    private initErrorHandler(): void {
        this.app.use(errorHandler)
    }

    public listen() {
        const port = process.env.PORT
        this.app.listen(port, () => {
            connectDb()
            console.log(`Server actively eavesdropping 👂 👂 👂 👂 @port ${port}`);
        })
    }
}


export default App
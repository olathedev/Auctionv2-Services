import express, { Application } from "express"
import mongoose from "mongoose"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import Controller from '@/utils/types/controller.types'
import errorHandler from "@/middlewares/error.middelwares"
import helmet from "helmet"


class App {
    app: Application;
    port: number

    constructor(controllers: Controller[], port: number) {
        this.app = express()
        this.port = port

        this.initDatabaseConnection();
        this.initMiddleware()
        this.initControllers(controllers)
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
            this.app.use('api/v1', controller.router)
        })
    }

    private initErrorHandler(): void {
        this.app.use(errorHandler)
    }

    private initDatabaseConnection() {
        mongoose.connect('')
    }

    public listen() {
        const port = process.env.PORT
        this.app.listen(port, () => {
            console.log(`Server actively eavesdropping 👂 👂 👂 👂 @port ${port}`);

        })
    }
}


export default App
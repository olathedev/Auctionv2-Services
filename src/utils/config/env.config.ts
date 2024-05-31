import { IEnviroment } from "../types/env.types";

export const Enviroment: IEnviroment = {
        APP: {
            NODE_ENV: process.env.NODE_ENV!,
            PORT: parseInt(process.env.PORT || '3000')
        }, 

        DB: {
            MONGO_URI: process.env.MONGO_URI!   
        }
}
import mongoose from "mongoose";
import { Enviroment } from "../config/env.config";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auctionv2')
        console.log('db connected')
    } catch (error: any) {
        console.log(error.message)
    }
}
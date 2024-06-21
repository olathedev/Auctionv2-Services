import HttpException from "../utils/exceptions/http.exceptions";
import { NextFunction, Request, Response } from "express";


const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode || 500
    const message = error.message || "Something went wrong"


    res.status(statusCode).json({
        message,
        status: error.status,
        statusCode
    })


}


export default errorHandler
import HttpException from "../utils/exceptions/http.exceptions";
import { NextFunction, Request, Response } from "express";


const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: `${req.originalUrl} - not found`
    })

}


export default notFound
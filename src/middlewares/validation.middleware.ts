import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from 'joi'

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const validationOptions = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        };

        try {
            const data = await schema.validateAsync(req.body, validationOptions)
            req.body = data
            next()
        } catch (e: any) {
            const errors: string[] = [];

            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message)
            });

            res.status(400).json({
                status: "Failure",
                message: "Please provide value for all fields",
                errors: errors
            })
        }



    }
}   



export default validationMiddleware
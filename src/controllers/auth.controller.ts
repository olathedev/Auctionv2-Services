import { NextFunction, Request, Response, Router } from "express";
import Controller from "../utils/types/controller.types";
import userService from "../services/user.service";
import HttpException from "../utils/exceptions/http.exceptions";
import validationMiddleware from "../middlewares/validation.middleware";
import userValidationSchema from "../validators/user.validator";

class AuthController implements Controller {
    public path = '/auth';
    public router = Router()
    // private userService = new userService()

    constructor() {
        this.loadRoutes()
    }

    private loadRoutes() {
        this.router.get(`${this.path}/health`, (req: Request, res: Response) => {
            res.status(200).json({
                message: 'user service works',
                status: 'success',
            });
        })

        this.router.post(`${this.path}/signup`, validationMiddleware(userValidationSchema), this.signup)
        this.router.post(`${this.path}/signup`, this.signin)
        this.router.post(`${this.path}/verifyEmail`, this.verifyEmail)
        this.router.post(`${this.path}/forgottenPassword`, this.forgottenPassword)
        this.router.post(`${this.path}/resetPassword`, this.resetPassword)

    }


    public async signup(  
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const data = await userService.signup(req.body)
             res.status(201).json(data)
        } catch (error: any) {
            next(new HttpException(error.statusCode, error.message))
        }
    }

    public signin() {

    }

    public verifyEmail() {

    }

    public forgottenPassword() {

    }

    public resetPassword() {

    }
}

export default AuthController
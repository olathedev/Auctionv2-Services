import { Request, Response, Router } from "express";
import Controller from "../utils/types/controller.types";
import { userService } from "../services/user.service";

class UserController implements Controller {
    public path = '/user';
    public router = Router()
    private userService = new userService()

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

        this.router.post(`${this.path}/signup`, this.signup)
        this.router.post(`${this.path}/signup`, this.signin)
        this.router.post(`${this.path}/verifyEmail`, this.verifyEmail)
        this.router.post(`${this.path}/forgottenPassword`, this.forgottenPassword)
        this.router.post(`${this.path}/resetPassword`, this.resetPassword)

    }


    public signup() {

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
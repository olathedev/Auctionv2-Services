import { Router, Request, Response, NextFunction } from "express";
import Controller from "../utils/types/controller.types";
import validationMiddleware from "../middlewares/validation.middleware";
import propertyValidator from "../validators/property.validator";
import PropertyService from "../services/property.service"
import HttpException from "../utils/exceptions/http.exceptions";


class PropertyController implements Controller {
    public path: string = '/property';
    public router: Router = Router()
    private PropertyService = new PropertyService()

    constructor() {
        this.loadRoutes()
    }
    private loadRoutes() {
        // checks if service is up
        this.router.get(`${this.path}/health`, (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Property service works',
                status: 'success',
            });

        })

        this.router.post(`${this.path}`, validationMiddleware(propertyValidator.propertyValidationSchema), this.create)
        this.router.get(`${this.path}`, this.getAll);
        this.router.get(`${this.path}/:id`, this.getAll);
    }

    

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.PropertyService.create(req.body)
            return res.status(data.statusCode).json({ ...data, message: data.message })
        } catch (error: any) {
            next(new HttpException(400, error.message));
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const data = await this.PropertyService.getAll()
            return res.status(data.statusCode).json({ ...data, message: data.message })
        } catch (error: any) {
            next(new HttpException(error.statusCode, error.message))
        }
    }

    public async getSingle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const data = await this.PropertyService.getAll()
            return res.status(data.statusCode).json({ ...data, message: data.message })
        } catch (error: any) {
            next(new HttpException(error.statusCode, error.message))
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).json({msg: 'working'})
        } catch (error: any) {
            next(new HttpException(error.statusCode, error.message))
        }
    }



}


export default PropertyController
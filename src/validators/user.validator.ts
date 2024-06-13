import { Role } from "../utils/enums";
import Joi from "joi";

const userValidationSchema = Joi.object({ 
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().optional(),
    password: Joi.string().required(),
    image: Joi.string().uri().required(),
    role: Joi.string().valid(...Object.values(Role)).default(Role.TENANT),
    verificationToken: Joi.string().optional(),
 })

import { propertyStatus } from "../utils/enums";
import Joi from "joi";

const propertyValidationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().positive(),
    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zip: Joi.string().required().pattern(/^[0-9]{6}$/), // Nigeira ZIP code format 6 digits
    }).required(),
    size: Joi.number().required().positive(),
    bedrooms: Joi.number().required().integer().min(0),
    bathrooms: Joi.number().required().integer().min(0),
    yearBuilt: Joi.number().required().integer().min(1000).max(new Date().getFullYear()), // Assuming properties are not older than 1000 AD
    type: Joi.string().required(),
    status: Joi.string().required().valid(...Object.values(propertyStatus)),
    images: Joi.array().items(Joi.string().uri()).required(),
})

export default {
    propertyValidationSchema
}
import ResponseUtils from "../utils/response.utils";
import IProperty, { IGetProperties } from "../utils/types/property.type";
import propertyModel from "../models/property.model";
import HttpException from "../utils/exceptions/http.exceptions";

class PropertyService {
    private property = propertyModel
    

    public async create(payload: IProperty) {
        try {
            const property = await this.property.create(payload)
            return ResponseUtils.buildResponse({
                message: "Property successfully created",
                data: property
            })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async getAll() {
        const property = await this.property.find()
        return ResponseUtils.buildResponse({
            data: property,
            count: property.length
        })
    }

    public async getSingle(query: IGetProperties) {
        const property = await this.property.findOne(query)
        if (!property) {
            return new HttpException(400, "No property found with this ID")
        }
        return ResponseUtils.buildResponse({
            data: property
        })
    }

    public async update(id: string, payload: IGetProperties) {
        const isProperty = await this.property.findOne({ _id: id })
        if(!isProperty) return new HttpException(400, "No property found with this id")
        const property = await this.property.findOneAndUpdate({ _id: id}, payload)
        return ResponseUtils.buildResponse({
            data: property
        })
    }

    public async delete(id: string) {
        const isProperty = await this.property.findOne({ _id: id })
        if(!isProperty) return new HttpException(400, "No property found with this id")
        const property = await this.property.findOneAndDelete({ _id: id})
        return ResponseUtils.buildResponse({
            data: property
        })
    }


}

export default PropertyService
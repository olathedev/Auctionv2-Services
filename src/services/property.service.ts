import ResponseUtils from "../utils/response.utils";
import IProperty from "../utils/types/property.type";
import propertyModel from "../models/property.model";

class  PropertyService {
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
        try {
          const property = await this.property.find()
          return ResponseUtils.buildResponse({
            data: property,
            count: property.length
          })
        } catch (error) {
            throw new Error("unable to get Properties")
        }
    }

    
}

export default new PropertyService()
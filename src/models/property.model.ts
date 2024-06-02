import { propertyStatus } from "../utils/enums";
import IProperty from "../utils/types/property.type";
import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema<IProperty>({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true }
    },

    size: {
        type: Number,
        required: true
    },

    bedrooms: {
        type: Number,
        required: true
    },

    bathrooms: {
        type: Number,
        required: true
    },
    yearBuilt: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
        enum: Object.values(propertyStatus),
        default: propertyStatus.AVAILABLE
    },

    images: {
        type: [String],
        required: true
    },

    createdBy: {
        type: mongoose.Schema.ObjectId,
        required: true
    }

},
    {
        timestamps: true
    }
)


export default mongoose.model<IProperty>('property', PropertySchema)
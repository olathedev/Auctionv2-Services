// interfaces/Property.ts

import { Document, Types } from "mongoose";

export default interface IProperty extends Document {
    id: string;
    title: string;
    description: string;
    price: number;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    size: number; // in square feet
    bedrooms: number;
    bathrooms: number;
    yearBuilt: number;
    type: string;
    status: string;
    images: string[];
    createdBy:Types.ObjectId
  }
  
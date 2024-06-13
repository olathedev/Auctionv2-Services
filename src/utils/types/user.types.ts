import { Types } from "mongoose";
import { Role } from "../enums";

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: Number;
    password: string;
    profileImage: string;
    role: Role;
    isEmailVerified: boolean;
    isPhoneNumberVerified: boolean;
    verificationToken: string;
    properties: Types.ObjectId;
    isProfileCompleted: boolean;
    passwordResetToken: string;
    passwordResetExpires: Date;
    passwordResetRetries: number;
    passwordChangedAt: Date

}
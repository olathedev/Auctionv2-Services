import { Role } from "../utils/enums";
import { IUser } from "../utils/types/user.types";
import mongoose, { Schema } from "mongoose";


const UserSchema = new mongoose.Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: [true, 'Email field is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },

  phoneNumber: {
    type: Number,
    unique: true,
    sparse: true
  },

  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true,

  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.TENANT
  },

  isEmailVerified: {
    type: Boolean,
    default: false
  },

  isPhoneNumberVerified: {
    type: Boolean,
    default: false
  },

  verificationToken: {
    type: String
  },

  properties: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  },

  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  passwordResetRetries: {
    type: Number,
    default: 0,
    select: false,
  },
  passwordChangedAt: {
    type: Date,
    select: false,
  },
}, {
  timestamps: true
});


export default mongoose.model<IUser>("User", UserSchema)
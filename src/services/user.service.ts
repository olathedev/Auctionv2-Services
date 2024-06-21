import Bcrypt from "../utils/bcrypt.utils";
import HttpException from "../utils/exceptions/http.exceptions";
import responseUtils from "../utils/response.utils";
import { IUser } from "../utils/types/user.types";
import userModel from "../models/user.model";
import emailService from "../mailing/email.service";
import generateRandomString from "../utils/generateRandomString";

class userService {

    private UserModel = userModel
    private Bcrypt = new Bcrypt()
    constructor() { }

    public async signup(payload: IUser) {

        let {
            firstname,
            lastname,
            email,
            password
        } = payload

        if (!firstname || !lastname || !email || !password) throw new HttpException(400, "Incomplete Signup data")

        const userRegistered = await this.UserModel.findOne({
            email: email
        })

        if (userRegistered) {
            throw new HttpException(400, "Email already exists")
        }

        const hashPayload = {
            saltRounds: 12,
            password
        }

        const hashedPassword = await this.Bcrypt.hashPassword(hashPayload)

        payload.password = hashedPassword

        const verificationToken = generateRandomString()
        payload.verificationToken = verificationToken

        const user = await this.UserModel.create(payload)

        const mail = await emailService.sendVerificationEmail(user)

        console.log(mail)
        
        return responseUtils.buildResponse({
            message: "user created successfully",
            data: user,
        })
    }

    public async signin(payload: IUser) {

    }


}

export default new userService()
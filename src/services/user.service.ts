import Bcrypt from "../utils/bcrypt.utils";
import HttpException from "../utils/exceptions/http.exceptions";
import responseUtils from "../utils/response.utils";
import { IUser } from "../utils/types/user.types";
import userModel from "../models/user.model";

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

        if (!firstname || !lastname || !email || !password) return new HttpException(400, "Incomplete Signup data")

        const userRegistered = await this.UserModel.findOne({
            email: email
        })

        if (userRegistered) {
            return new HttpException(400, "Email already exists")
        }

        const hashPayload = {
            saltRounds: 12,
            password
        }

        const hashedPassword = await this.Bcrypt.hashPassword(hashPayload)

        payload.password = hashedPassword

        const verificationToken = '1234qw'
        payload.verificationToken = verificationToken

        const user = await this.UserModel.create(payload)
        
        return responseUtils.buildResponse({
            message: "user created successfully",
            data: user,
        })
    }

    
}

export default new userService()
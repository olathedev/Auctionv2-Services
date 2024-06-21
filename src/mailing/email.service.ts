import { Enviroment } from "../utils/config/env.config"
import { IEmailObject } from "../utils/types/email.types"
import sg, { MailDataRequired } from "@sendgrid/mail"
import path from "path"
import * as fs from 'fs'
import { IUser } from "../utils/types/user.types"

class EmailService {
    private apiKey: string
    private from: string

    constructor(apiKey: string, from: string) {
        this.apiKey = apiKey
        this.from = from
        sg.setApiKey(this.apiKey)
    }

    public async send(mailObj: IEmailObject, user: IUser) {
        mailObj.to = user.email
        mailObj.from = this.from
        const sgResponse = await sg.send(<MailDataRequired>mailObj, false)
        console.log(`email successfully sent to ${user.email}`)
        return sgResponse
    }

    public async getEmailTemplate(template: string) {
        const tempPath = path.join(__dirname, `/email-templates/${template}.html`)
        const html = fs.readFileSync(tempPath, "utf8")
        console.log(tempPath)
        return html
    }

    public async sendVerificationEmail(user: IUser) {
        const html = await this.getEmailTemplate("signup")
        const mailObj: IEmailObject = {
            to: user.email,
            from: this.from,
            subject: "Verify your email",
            html
        }

        return this.send(mailObj, user)
    }
}

export default new EmailService(Enviroment.MAILING.SENDGRID_API_KEY, Enviroment.MAILING.SENDGRID_FROM)
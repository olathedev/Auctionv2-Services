import { Enviroment } from "utils/config/env.config"
import { IEmailObject } from "utils/types/email.types"
import sg, { MailDataRequired } from "@sendgrid/mail"
import path from "path"
import fs from 'fs'

class EmailService {
    private apiKey: string
    private from: string

    constructor(apiKey: string, from: string) {
        this.apiKey = apiKey
        this.from = from
        sg.setApiKey(this.apiKey)
    }

    public async send(mailObj: IEmailObject, user: IUser) {
        mailObj.from = this.from
        const sgResponse = await sg.send(<MailDataRequired>mailObj, false)
        console.log(sgResponse)
        return sgResponse
    }

    public async getEmailTemplate(template: string) {
        const tempPath = path.join(__dirname, `/email-templates/${template}.html`)
        const html = fs.readFileSync(tempPath, "utf8")
        console.log(tempPath)
        return html
    }
}

export default new EmailService(Enviroment.MAILING.SENDGRID_API_KEY, Enviroment.MAILING.SENDGRID_FROM)
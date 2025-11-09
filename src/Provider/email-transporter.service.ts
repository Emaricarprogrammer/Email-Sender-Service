import nodemailer from "nodemailer"
import { IEmailProvider, IMessage } from "../Interfaces/email-provider"
import dotenv from "dotenv"
dotenv.config()

import SMTPTransport from "nodemailer/lib/smtp-transport"

class EmailProvider implements IEmailProvider
{
    private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>
     constructor()
     {
        this.transporter = nodemailer.createTransport({
            host: String(process.env.SMTP_HOST),
            port: Number(process.env.SMTP_PORT),
            auth:{
                user: String(process.env.SMTP_USER),
                pass: String(process.env.SMTP_PASSWORD)
            },
            tls:{
                rejectUnauthorized:false
            }
        })
    }
    async sendEmail(message: IMessage): Promise<any>
    {
        return await this.transporter.sendMail({
        from:{
            address: message.from.email,
            name: message.to.name
        },
        to:{
            name: message.to.name,
            address: message.to.email
        },
        subject: message.subject,
        html: message.body
    })
    }
}
export {EmailProvider}
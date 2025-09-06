import { Request, Response } from "express";
import { EmailSenderService } from "../Service/email-sender.service";
import { EmailProvider } from "../Provider/email-transporter.service";

class SendEmailController
{
    private static provider: EmailProvider = new EmailProvider()
    private static service: EmailSenderService = new EmailSenderService(this.provider)

    static async send(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {email, subject} = req.body
            if(!email || !subject)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe todos os campos"})
            }
            const result = await this.service.sender(email, subject, "<h1>Hello</h1>")
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"}    
        }
    }
}
export {SendEmailController}
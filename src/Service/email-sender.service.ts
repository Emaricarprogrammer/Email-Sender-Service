import { EmailProvider } from "../Provider/email-transporter.service";
import * as validator from "validator"

class EmailSenderService
{
    constructor(private readonly emailProvider: EmailProvider){}

    async sender(email: string, subject: string, templateForBody: string)
    {
        try
        {
            if(!validator.isEmail(email))
            {
                return {success: false, statusCode: 400, message: "Informe um email válido"}
            }
            const transporter = await this.emailProvider.sendEmail({
                from:{
                    email:"teste@gmail.com",
                    name:"Email de teste"
                },
                to:{
                    email: email,
                    name: "Cliente"
                },
                subject: subject,
                body: templateForBody
            })
            console.log(transporter)
            if(!transporter)
            {
                return {success: false, statusCode: 500, message: "Ocorreu um erro ao enviar este email, tente novamente"}
            }
            return {success: true, statusCode: 200}
            } catch (error: any)
            {
                console.log(error)
                return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"}
            }    
        }
}
export{EmailSenderService}
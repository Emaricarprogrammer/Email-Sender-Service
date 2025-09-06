interface IAddress
{
    name: string
    email: string
}
interface IMessage
{
    to: IAddress
    from: IAddress
    subject: string
    body: string
}
interface IEmailProvider
{
    sendEmail(message: IMessage): Promise<any>
}
export{IAddress, IMessage, IEmailProvider}
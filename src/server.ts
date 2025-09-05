import { App } from "./app";
import dotenv from "dotenv"
dotenv.config()

const host = "0.0.0.0"
const port = Number(process.env.PORT) || 5030

async function Server()
{
    try
    {
        await App.listen(port, host, () =>{
            console.log(`Server is running on port ${port}`)
        })
    } catch (error: any)
    {
        console.log(error)    
    }
}
Server()

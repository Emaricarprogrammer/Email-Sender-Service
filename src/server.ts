import { app } from "./app";
import dotenv from "dotenv"
dotenv.config({quiet: true})

const host = "0.0.0.0"
const port = Number(process.env.PORT) || 5030

async function Server()
{
    try
    {
        await app.listen(port, host, () =>{
            console.log(`Server is running on port ${port}`)
        })
    } catch (error: any)
    {
        console.log(error)   
        process.exit(1) 
    }
}
Server()

import express, { NextFunction, Request, Response} from "express"
import cors from "cors"
import { emailRoutes } from "./Routes/route"

const app = express()
const basePath = "/api.email-service/v1"

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(basePath, emailRoutes)

app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(404).json({
        success: false,
        statusCode:404,
        message: "Nosso servidor não conseguiu encontar esta página."})
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    console.error(err)
    res.status(500).json({
        success: false,
        statusCode:500,
        message: "Ocorreu um erro interno, tente novamente ou entre em contacto com o suporte.",
    });
});
export {app}
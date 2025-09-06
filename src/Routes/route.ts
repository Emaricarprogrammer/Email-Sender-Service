import { Response, Request, Router} from "express";
import { SendEmailController } from "../Controller/send-email.controller";

const emailRoutes: Router = Router()

emailRoutes.route("/sendEmail").post((req: Request, res: Response) =>{SendEmailController.send(req, res)})

export {emailRoutes}
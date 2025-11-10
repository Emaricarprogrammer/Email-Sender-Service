import { app } from "../app";
import request from "supertest"

describe("sendEmail", ()=>{
    it("Should return 204", async()=>{
        jest.setTimeout(80000)
        const req = await request(app)
        .post("/api.email-service/v1/sendEmail")
        .send({
            email:"emaricaroffice@gmail.com",
            subject:"Vamos testar",
            body: "<h1>So testando<h1/>"
        })
        expect(req.status).toBeTruthy()
        expect(req.statusCode).toBe(204)
    })
})
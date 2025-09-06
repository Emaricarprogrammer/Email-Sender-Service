# 📧 Email Service  

Um microserviço simples de envio de e-mails desenvolvido em **Node.js**, seguindo princípios de **Clean Code Architecture**, **SOLID** e utilizando **Docker** para containerização.  

---

## 🚀 Tecnologias  

- **Node.js** (v20+)  
- **Express.js**  
- **TypeScript**  
- **Docker**  
- **Nodemailer**  

---

## 📂 Arquitetura em Camadas  

Este projeto segue uma **arquitetura em camadas**, organizada da seguinte forma:  

- **Controllers** → onde a requisição HTTP é tratada  
- **Services** → onde a regra de negócio acontece  
- **Routes** → ponto de entrada das requisições HTTP  
- **Provider** → responsável pelo driver de envio de e-mail  
- **Interfaces** → definição dos contratos para envio de e-mail  

---

## 📂 Estrutura de Pastas  

```bash
📦 email_service
 ┣ 📂 src
 ┃ ┣ 📂 Controller
 ┃ ┃ ┗ send-email.controller.ts
 ┃ ┣ 📂 Routes
 ┃ ┃ ┗ email.routes.ts
 ┃ ┣ 📂 Services
 ┃ ┃ ┗ send-email.service.ts
 ┃ ┣ 📂 Provider
 ┃ ┃ ┗ email-transporter.service.ts
 ┃ ┣ 📂 Interfaces
 ┃ ┃ ┗ email-provider.ts
 ┃ ┣ server.ts
 ┃ ┗ app.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 Dockerfile
 ┗ 📜 README.md

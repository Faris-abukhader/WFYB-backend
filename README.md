<h1 align="center">
WFYB
</h1>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/we-work-backend/blob/master/README_ar.md"> بالعربي </a>📔 
 </p>
<p align="center">
 front-end part coming soon ...
</p>


## 🚩 Table of Contents

- [Introduction](#--introduction)
- [Installation](#--installation)
- [Development setup](#--development-setup)
- [Project structure](#--project-structure)
- [Features](#--features)
- [Packages](#-packages)
- [License](#-license)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  Introduction 

<p>
WeWork is an open source freelancing platform , where is consist of two parts , first part is Backend which you are reading now and the other part is Frontend . In this part we gonna design our DB and create secure connection (using JWT) through our API to frontend , where users , request , jobs info all gonna be saved.
<br/>
This API gonna cover the authentication part , which includes SignIn, JWT , SignUp , email verification.
<br/>
In this API under user we have two accounts type , first is freelancer second is employer .
</br>
Employers can publish there own jobs , then freelancer can provides there proposals , employers can accept or decline the proposals , once proposal is accepted one recruiting request gonna be send to freelancer , if both side accept the request the job goona be closed ; also the employer can send request to specific freelancer direclty without waiting for proposal.
</br>
Employer can rate freelancer for each job , and from here freelancer gonna get his average rate.
WeWork API also provide Conversation route where users can be in touch through messages between them.
</br>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Installation 


### 🔘 Cloning repository
1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
git clone github.com/Faris-abukhader/WFYB-backend
```
Press Enter to create your local clone
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `WFYB-backend`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Development setup

To set up this project you need to download NodeJs in your machine or if you have it make sure you have the latest version of it.

### 🔘 Checking up Node version
```
node -v
```

### 🔘 Downloading Node

> for Windows  


Download the windows installer from [NodeJs offical website](https://nodejs.org/en/download/) make sure you have download the latest version of NodeJs.
<br/>


> for Mac
- You can download NodeJs using brew CLI
```
brew install node
```
- You can download NodeJs mac version through [the offical website](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 Downloading the packages

Go to project direct where  <package.json> is exist and type in terminal :
```
npm install 
```
Now you need to create DB server connection , after you create it , create .gitignore file and type :
```
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<USERNAME>:<YOUR_PASSWORD>@localhost:3306/<DB_NAME>?schema=public"

```
Now you need to step up Prisma ORM , type in your terminal :
```
cd prisma 
prisma migrate dev
```

To run the project just type down in terminal :
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Project structure  

```
📦WFYB-backend 
 ┣ 📂auth
 ┃ ┣ 📜authController.js
 ┃ ┣ 📜authRoute.js
 ┃ ┗ 📜authSchema.js
 ┣ 📂comment
 ┃ ┣ 📜commentController.js
 ┃ ┣ 📜commentRoute.js
 ┃ ┗ 📜commentSchema.js 
 ┣ 📂pledge
 ┃ ┣ 📜pledgeController.js
 ┃ ┣ 📜pledgeRoute.js
 ┃ ┗ 📜pledgeSchema.js
 ┣ 📂preValidation
 ┃ ┣ 📜backerMiddleware.js
 ┃ ┣ 📜starterMiddleware.js
 ┃ ┣ 📜userMiddleware.js
 ┃ ┗ 📜websiteMiddleware.js
 ┣ 📂prisma
 ┃ ┗ 📜schema.prisma
 ┣ 📂project
 ┃ ┣ 📜projectController.js
 ┃ ┣ 📜projectRoute.js
 ┃ ┗ 📜projectSchema.js
 ┣ 📂reply
 ┃ ┣ 📜replyController.js
 ┃ ┣ 📜replyRoute.js
 ┃ ┗ 📜replySchema.js
 ┣ 📂starter
 ┃ ┣ 📜starterController.js
 ┃ ┣ 📜starterRoute.js
 ┃ ┗ 📜starterSchema.js
 ┣ 📂util
 ┃ ┣ 📂emailConfig
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┣ 📜resetPassword.html
 ┃ ┃ ┃ ┗ 📜verify.html
 ┃ ┃ ┣ 📜emailConfig.js
 ┃ ┃ ┣ 📜script.js
 ┃ ┃ ┗ 📜sendInBlue.js
 ┃ ┣ 📜docGeneratorOptions.js
 ┃ ┣ 📜paginationRange.js
 ┃ ┗ 📜schemaContainer.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Features  

- Simple rest API doc , generated using swagger library , you can check that out at :
```
http://localhost:4500/doc
```
- Authentications , authorizations are all implemented with differents layers , check Prevalidation folder .
- Credentials is all well encoded before it saves to DB.
- Custom implementation of verify account by email 



## 📦 Packages


| Name | Description |
| --- | --- |
| [`@fastify/cors`](https://github.com/fastify/fastify-cors) | Fastify CORS |
| [`@fastify/static`](https://github.com/fastify/fastify-static) | Plugin for serving static files as fast as possible |
| [`@fastify/swagger`](https://github.com/fastify/fastify-swagger) | Swagger-compliant APIs entirely in Node.js |
| [`@prisma/client`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`prisma`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`bcrypt`](https://www.npmjs.com/package/bcrypt) | A library to help you hash passwords |
| [`fastify`](https://github.com/fastify/fastify) | Fast and low overhead web framework, for Node.js |
| [`handlebars`](https://www.npmjs.com/package/handlebars) | A Handlebars view engine for Express which doesn't suck |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) | JSON Web Token implementation (symmetric and asymmetric) |
| [`nodemailer`](https://github.com/nodemailer/nodemailer) | Easy as cake e-mail sending from your Node.js applications |
| [`nodemon`](https://github.com/remy/nodemon) | Simple monitor script for use during development of a Node.js app |
| [`sib-api-v3-sdk`](https://www.npmjs.com/package/sib-api-v3-sdk) | SendinBlue's API v3 Node.js Library |


## 📜 License

This software is licensed under the [MIT](https://github.com/Faris-abukhader/WFYB-backend/blob/master/license) © [FaRiS](https://github.com/Faris-abukhader).

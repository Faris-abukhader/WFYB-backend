const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const {sendEmail} = require('../util/emailConfig/sendInBlue')
const {getTargetScript} = require('../util/emailConfig/script')


const signUp = async(req,reply)=>{
    try{

        // extracting  the data from request body
        const {email,password,firstName,lastName,accountType} = req.body

        // calling hash function to hash the password before save it into DB
        const hash = bcrypt.hashSync(password, saltRounds);


        // building the data need for creating user user whether was freelancer or employer
        let isStarter = accountType=='s'
        let data = {
            email,
            password:hash,
            accountType,
            firstName,
            lastName,
            token:'',
        }
        let include = {}

        if(isStarter){
           data.starter = {
            create:{}
           }
           include = {
            starter:true
           }
        }else{
            data.backer = {
                create:{}
            }
            include = {
                backer:true
            }    
        }

        // creating new user in DB
        const newUser =  await prisma.user.create({
            data,
            include
        }) 


        // getting back the account id after it generate in DB
        let targetId = newUser.id

        // sign one token and pass newUserId to it as data
        const token = jwt.sign({id:targetId},process.env.JWT_SECRET)

        // updating new user and save the token to it
        const user = await prisma.user.update({
            where:{
                id:newUser.id
            },
            data:{
            token
            },
            include
        })


        // sending email to user to verify his account
        sendEmail([{email}],getTargetScript('verify').emailTitle,'verify',process.env.API_URL,token,`${firstName + ' ' + lastName}`)
        
        reply.send(user)  

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const resendVerifyingEmail = async(req,reply)=>{
    try{
        const {email} = req.params

        // checking if the email registered in DB
        const targetUser = await prisma.user.findUnique({
            where:{
                email
            }
        })

        // sign one token and pass newUserId to it as data
        const token = jwt.sign({id:targetUser.id},process.env.JWT_SECRET)


        // sending verifying emial to target email
        sendEmail([{email}],getTargetScript('verify').emailTitle,'verify',process.env.API_URL,token,`${targetUser.firstName + ' ' + targetUser.lastName}`)

        reply.send({message:'resendEmailVerifySendSuccessfully'})


    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const signIn = async(req,reply)=>{
      try{
        // extracting  the data from request body
        const {email,password} = req.body

        console.log('request is coming . . . ')
        console.log(email,password)

        // checking if the email is exist or not 
        const targetUser = await prisma.user.findUnique({
            where:{
                email,
            },
            include:{ 
                starter:true,
                backer:true
            }
        })

        if(!targetUser) throw Error('No use found')

        // extract one one accout
        let tempUser = targetUser
        if(tempUser.accountType=='s'){
            delete tempUser.backer
        }else{
            delete tempUser.starter
        }

        // if the user isn't verify throw error
        if(!targetUser.isVerified)throw new Error(`user isn't verified`)

        // compare the found user's password with request password
        const isPasswordCorrect = bcrypt.compareSync(password, targetUser.password);

        // if password isn't correct
        if(!isPasswordCorrect) throw new Error(`Password isn't correct`)

        // return the user 
        reply.send(tempUser)
    
      }catch(err){
        console.log(err)
        reply.send(err) 
      }

}


const verify = async(req,reply)=>{

    try{
        // extract the token  from url query string
        const {token} = req.query

        // checking the token
        const targetId = jwt.verify(token,process.env.JWT_SECRET).id


        // updating the user and make it verified
        await prisma.user.update({
            where:{
                id:targetId
            },
            data:{
                isVerified:true,
                verifiedDate: new Date()  
            }
        })

        // return html page for redirect to target frontend auth page 
        reply.type('text/html').send(`
        <div style="width:100%;height:100vh; display:flex; align-items: center;justify-content:center">
        email verify sucessfully , redirecting the page ...
        </div>
        <script>
        setTimeout(function(){
        window.location.href = '${process.env.FRONTEND_URL}/auth/signIn'
              }, 2000); 
        </script>`)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}


const updateOneUser = async(req,reply)=>{
    try{
    
      // ectracting the user id from request params
      const {id} = req.params

      // extracting  the data from request body
      const {firstName,lastName,nationality,avatar} = req.body

      // checking if the email is exist or not 
      const targetUser = await prisma.user.update({
          where:{
              id,
          },
          data:{
            firstName,
            lastName,
            nationality,
            avatar
          },
          include:{ 
              starter:true,
              backer:true
          }
      })

      // extract one one accout
      let tempUser = targetUser
      if(tempUser.accountType=='s'){
          delete tempUser.backer
      }else{
          delete tempUser.starter
      }

      // return the user 
      reply.send(tempUser)
  
    }catch(err){
      console.log(err)
      reply.send(err) 
    }

}


const updateOneUserAvatar = async(req,reply)=>{
    try{
    
      // ectracting the user id from request params
      const {id} = req.params

      // extracting  the data from request body
      const {avatar} = req.body

      // checking if the email is exist or not 
      const targetUser = await prisma.user.update({
          where:{
              id,
          },
          data:{
            avatar
          },
          include:{ 
              starter:true,
              backer:true
          }
      })

      // extract one one accout
      let tempUser = targetUser
      if(tempUser.accountType=='s'){
          delete tempUser.backer
      }else{
          delete tempUser.starter
      }

      // return the user 
      reply.send(tempUser)
  
    }catch(err){
      console.log(err)
      reply.send(err) 
    }

}




module.exports = {
    signUp,
    signIn,
    verify,
    resendVerifyingEmail,
    updateOneUser,
    updateOneUserAvatar
}
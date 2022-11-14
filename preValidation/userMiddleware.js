const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const {verify} = require('jsonwebtoken')

const userMiddleware = async(req,res,next)=>{
    const token = req.headers.token
    let userId = null

    // if there is not token at the header refuse the request -> Unauthorized request
    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

    // extract the id from token        
    userId = verify(token,process.env.JWT_SECRET).id

    // check if the id is exist in the token otherwise refuse the request -> Unauthorized request
    if(!userId) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
  
    // use the id and search for the user if DB
    try{
      const targetUser = await prisma.user.findUnique({
          where:{
              id:userId,
          }
      }) 

      // if the user is not exist refuse the request  -> Unauthorized request
      if(!targetUser) throw 'Unauthorized request.'


    }catch(err){
      console.log(err)
      res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
    }     
}

module.exports = {userMiddleware}
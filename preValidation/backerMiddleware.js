const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const {verify} = require('jsonwebtoken')

const backerMiddleware = async(req,res,next)=>{
    const token = req.headers.token
    let backerId = null

    // if there is not token at the header refuse the request -> Unauthorized request
    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

    // extract the id from token    
    backerId = verify(token,process.env.JWT_SECRET).id

    // check if the id is exist in the token otherwise refuse the request -> Unauthorized request
    if(!backerId) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
  
    // use the id and search for the user if DB
    try{
      const targetBacker = await prisma.backer.findUnique({
          where:{
              id:backerId,
          }
      }) 

      // if the user is not exist refuse the request  -> Unauthorized request
      if(!targetBacker) throw 'Unauthorized request.'

    }catch(err){
      console.log(err)
      res.code(401).send({stateCode:401,message:"Unauthorized request"}) 
  }     
}

module.exports = {backerMiddleware}
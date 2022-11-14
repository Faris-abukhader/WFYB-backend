const {verify} = require('jsonwebtoken')
const websiteMiddleware = async(req,res,next)=>{
    const token = req.headers.token
    let website_secret = null

    // if there is not token at the header refuse the request -> Unauthorized request
    if(!token) res.code(401).send({stateCode:401,message:"Unauthorized request"})  

    // extract the website secret from token    
    website_secret = verify(token,process.env.JWT_SECRET).website_secret

    // check if the website secret is exist in the token otherwise refuse the request -> Unauthorized request
    if(!website_secret) res.code(401).send({stateCode:401,message:"Unauthorized request"}) 

}
module.exports = {websiteMiddleware}
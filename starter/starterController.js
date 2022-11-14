const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const updateOneStarter = async(req,reply)=>{
      try{

        const {id} = req.params
        // extracting  the data from request body
        const {shortIntro} = req.body

        // checking if the email is exist or not 
        const targetStarter = await prisma.starter.update({
            where:{
                userId:id,
            },
            data:{
                shortIntro
            }
        })

        // return the user 
        reply.send(targetStarter)
    
      }catch(err){
        console.log(err)
        reply.send(err) 
      }

}

module.exports = {
    updateOneStarter,
}
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const createNewPledge = async(req,reply)=>{
  try{

    // extracting  the data from request body
    const {projectId,backerId,rewardId,country,amount} = req.body


    let data = {
      project:{
        connect:{
          id:projectId
        }
      },
      backer:{
        connect:{
          userId:backerId
        }
      },
      country,
      amount,
  }

  if (rewardId && rewardId.length>4){
    data.reward = {
      connect:{
        id:rewardId
      }
    }
  }

    // checking if the email is exist or not 
    const newPledge = await prisma.pledge.create({
        data,
        include:{
          project:{
            select:{
              id:true,
              title:true,
              category:true
            }
          },
          reward:{
            select:{
              id:true,
              description:true,
              amount:true
            }
          }
        }
    })

    // return the new pledge 
    reply.send(newPledge)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }
}

module.exports = {
    createNewPledge,
}
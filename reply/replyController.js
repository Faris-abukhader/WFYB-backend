const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const createNewReply = async(req,reply)=>{
  try{

    // extracting  the data from request body
    const {projectId,commentId,ownerId,content} = req.body

    const targetStarter = await prisma.project.findUnique({
      where:{
        id:projectId
      },
      select:{
        owner:{
          select:{
            userId:true
          }
        }
      }
    })


    // if the starter is not the project owner , then  he /she can't send reply on comments
    let canReply = targetStarter.owner.userId == ownerId ? true:false

    // if the backer did not support target project he/she can not share comment
    if(!canReply){
       throw new Error('Only the starter of this project who can reply on comments .')
    }

    const newReply = await prisma.reply.create({
        data:{
          comment:{
            connect:{
              id:commentId
            }
          },
          owner:{
            connect:{
              id:ownerId
            }
          },
          content,
        }
    })

    // return the new reply 
    reply.send(newReply)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }
}

const updateOneReply = async(req,reply)=>{
  try{
    // extract comment id from request params 
    const {id} = req.params
    // extracting  the data from request body
    const {content} = req.body

    const targetReply = await prisma.reply.update({
      where:{
        id
      },
      data:{
        content
      }
    })

    reply.send(targetReply)

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}

const deleteOneReply = async(req,reply)=>{
  try{
    // extract comment id from request params 
    const {id} = req.params

    const targetReply = await prisma.reply.delete({
      where:{
        id
      },
    })

    reply.send(targetReply)
  }catch(err){
    console.log(err)
    reply.send(err)
  }
}


module.exports = {
    createNewReply,
    updateOneReply,
    deleteOneReply
}
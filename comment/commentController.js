const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const createNewComment = async(req,reply)=>{
  try{

    // extracting  the data from request body
    const {projectId,backerId,content} = req.body



    const backers = await prisma.project.findUnique({
      where:{
        id:projectId
      },
      select:{
        pledgeList:{
          select:{
            backerId:true 
          }
        }
      }
    })


    let canComment = false

    // if the backer is not pledge or support this target project then he /she can't send share comment on it
    backers.pledgeList.map((comment)=>{
      if(comment.backerId == backerId){
        console.log(comment.backerId,backerId)
        canComment = true
      }
    })

    // if the backer did not support target project he/she can not share comment
    if(!canComment){
       throw new Error('Backer only can comment if he is backed this project')
    }

    const newComment = await prisma.comment.create({
        data:{
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
          content,
        }
    })

    // return the new pledge 
    reply.send(newComment)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }
}

const updateOneComment = async(req,reply)=>{
  try{
    // extract comment id from request params 
    const {id} = req.params
    // extracting  the data from request body
    const {content} = req.body

    const targetComment = await prisma.comment.update({
      where:{
        id
      },
      data:{
        content
      }
    })

    reply.send(targetComment)

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}

const deleteOneComment = async(req,reply)=>{
  try{
    // extract comment id from request params 
    const {id} = req.params

    const targetComment = await prisma.comment.delete({
      where:{
        id
      },
    })

    reply.send(targetComment)
  }catch(err){
    console.log(err)
    reply.send(err)
  }
}


module.exports = {
    createNewComment,
    updateOneComment,
    deleteOneComment
}
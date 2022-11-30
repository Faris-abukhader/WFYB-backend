const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {projectRange,pledgeRange} = require('../util/paginationRange')

const addToMarkbook = async(req,reply)=>{
  try{
    const {backerId,projectId} = req.body
    const newBookmark = await prisma.bookmark.create({
      data:{
        backer:{
          connect:{
            userId:backerId
          }
        },
        project:{
          connect:{
            id:projectId
          }
        }
      }
    })

    reply.send(newBookmark)

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}

const deleteOneMarkbook = async(req,reply)=>{
  try{
    const {id} = req.body
    const targetBookmark = await prisma.bookmark.delete({
      where:{
        id
      }
    })
    reply.send(targetBookmark)
  }catch(err){
    console.log(err)
    reply.send(err)
  }
}

const getOneUserAllMarkbooks = async(req,reply)=>{
  try{
    const {id} = req.params
    const bookmarks = await prisma.backer.findUnique({
      where:{
        userId:id
      },
      select:{
        bookmarks:{
          select:{
            project:{
              select:{
                id:true,
                title:true,
                fundingGoal:true,
                pledgeList:{
                  select:{
                    amount:true
                  }
                },
                owner:{
                  select:{
                    user:{
                      select:{
                        firstName:true,
                        lastName:true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })

    reply.send(bookmarks.bookmarks)

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}





module.exports = {
  addToMarkbook,
  deleteOneMarkbook,
  getOneUserAllMarkbooks
}
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const {projectRange,pledgeRange} = require('../util/paginationRange')

const createNewProject = async(req,reply)=>{
  try{
    const {ownerId,category,country,title,description,shortIntro,projectImage,compaignDurationEnd,fundingGoal,rewardList,risksAndChallenges,projectType} = req.body

    let data = {
      owner:{
        connect:{
          userId:ownerId
        }
      },
      category,
      country,
      title,
      description,
      shortIntro,
      projectImage,
      compaignDurationEnd,
      fundingGoal,
      rewardList,
      risksAndChallenges,
      projectType
    }

    if (rewardList && rewardList.length >= 1){
      data.rewardList = {
        createMany:{
          data:rewardList
        }
      }
    }
    const newProject = await prisma.project.create({
      data,
      include:{
        rewardList:true
      }
    })

    reply.send(newProject)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const updateOneProject = async(req,reply)=>{
  try{
    const {id} = req.params
    const {category,country,title,description,shortIntro,projectImage,compaignDurationEnd,fundingGoal,rewardList,risksAndChallenges,projectType} = req.body

    let data = {
      category,
      country,
      title,
      description,
      shortIntro,
      projectImage,
      compaignDurationEnd,
      fundingGoal,
      rewardList,
      risksAndChallenges,
      projectType
    }


    if (rewardList && rewardList?.length > 0){
      let rewards = rewardList.map((item)=>{
        return {
          title:item.title,
          amount:item.amount,
          description:item.description
        }
      })
      data.rewardList = {
        deleteMany:{},
        createMany:{
          data:rewards
        }
      }
    }
    const targetProject = await prisma.project.update({
      where:{
        id
      },
      data,
      include:{
        rewardList:true
      }
    })

    reply.send(targetProject)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const deleteOneProject = async(req,reply)=>{
  try{
    const {id} = req.params
    const targetProject = await prisma.project.delete({
      where:{
        id
      }
    })

    reply.send(targetProject)

  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const getOneProject = async(req,reply)=>{
  try{
    const {id} = req.params
    const targetProject = await prisma.project.findUnique({
      where:{
        id
      },
      include:{
        owner:{
          select:{
            _count:{
              select:{
                projects:true
              }
            },
            user:{
              select:{
                firstName:true,
                lastName:true,
                avatar:true
              }
            }
          }
        },
        _count:{
          select:{
            pledgeList:true
          }
        },
        pledgeList:{
          select:{
            amount:true
          }
        },
        comments:{
          select:{
            backer:{
              select:{
                user:{
                  select:{
                    firstName:true,
                    lastName:true,
                    avatar:true
                  }
                }, 
              }
            },
            content:true,
            replies:{
              select:{
                id:true,
                owner:{
                  select:{
                    firstName:true,
                    lastName:true,
                    avatar:true,
                  }
                },
                content:true
              }
            }
          },
          take:50
        },
        rewardList:{
          select:{
            id:true,
            title:true,
            description:true,
            amount:true
          }
        }
      }
    })
    console.log(targetProject)
    reply.send(targetProject)

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}

const getAllProjects = async(req,reply)=>{
  try{
    let pageNo = 0
    let toSkip = false
    if(req.params.pageNumber){
      pageNo = req.params.pageNumber
      toSkip = true
    }

    await prisma.project.count().then(async(length)=>{
        const data = await prisma.project.findMany({
            take:projectRange,
            skip:toSkip ? (pageNo-1)*projectRange:0, 
            include:{
              _count:{
                select:{
                  pledgeList:true
                }
              },
              pledgeList:{
                select:{
                  amount:true
                }
              },
              comments:{
                select:{
                  backer:{
                    select:{
                      user:{
                        select:{
                          firstName:true,
                          lastName:true
                        }
                      }, 
                    }
                  },
                  content:true,
                  replies:{
                    select:{
                      id:true,
                      owner:{
                        select:{
                          firstName:true,
                          lastName:true,
                        }
                      },
                      content:true
                    }
                  }
                },
                take:50
              }
            }
        })   
        reply.send({data,pageNumber:Math.ceil(length/projectRange)}) 
    })

  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const getOneStarterAllProjects = async(req,reply)=>{
  try{

    const {id} = req.params

    let pageNo = 0
    let toSkip = false
    if(req.params.pageNumber){
      pageNo = req.params.pageNumber
      toSkip = true
    }

    await prisma.project.count({
      where:{
        owner:{
          userId:id
        }
      }
    }).then(async(length)=>{
        const data = await prisma.project.findMany({
            where:{
              owner:{
                userId:id
              }
            },
            take:projectRange,
            skip:toSkip ? (pageNo-1)*projectRange:0,
            include:{
              _count:{
                select:{
                  pledgeList:true
                }
              },
              pledgeList:{
                select:{
                  amount:true
                }
              },
              comments:{
                select:{
                  backer:{
                    select:{
                      user:{
                        select:{
                          firstName:true,
                          lastName:true
                        }
                      }, 
                    }
                  },
                  content:true,
                  replies:{
                    select:{
                      id:true,
                      owner:{
                        select:{
                          firstName:true,
                          lastName:true,
                        }
                      },
                      content:true
                    }
                  }
                },
                take:50,
              },
            } 
        })   
        reply.send({data,pageNumber:Math.ceil(length/projectRange)}) 
    })

  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const searchProject = async(req,reply)=>{
  try{
    const {title} = req.query

    console.log(title)

    let pageNo = 0
    let toSkip = false
    if(req.params.pageNumber){
      pageNo = req.params.pageNumber
      toSkip = true
    }

    await prisma.project.count({
      where:{
        title:{
          contains:title
        }
      }
    }).then(async(length)=>{
        const data = await prisma.project.findMany({
            where:{
              title:{
                contains:title
              }
            },
            take:projectRange,
            skip:toSkip ? (pageNo-1)*projectRange:0, 
            include:{
              _count:{
                select:{
                  pledgeList:true
                }
              },
              pledgeList:{
                select:{
                  amount:true
                }
              },
              comments:{
                select:{
                  backer:{
                    select:{
                      user:{
                        select:{
                          firstName:true,
                          lastName:true
                        }
                      }, 
                    }
                  },
                  content:true
                },
                take:50,
                replies:{
                  id:true,
                  select:{
                    owner:{
                      select:{
                        firstName:true,
                        lastName:true,
                      }
                    },
                    content:true
                  }
                }
              }
            }
        })   
        reply.send({data,pageNumber:Math.ceil(length/projectRange)}) 
    })
  }catch(err){
    console.log(err)
    reply.send(err) 
  }

}

const getInvestedProjects = async(req,reply)=>{
  try{

    const {id} = req.params

    console.log(id)

    let pageNo = 0
    let toSkip = false
    if(req.params.pageNumber){
      pageNo = req.params.pageNumber
      toSkip = true
    }

    const data = await prisma.backer.findUnique({
        where:{ 
          userId:id
        },
        select:{
          pledges:{
            select:{
              country:true,
              amount:true,
              project:{
                select:{
                  id:true,
                  title:true,
                  fundingGoal:true,
                  _count:{
                    select:{
                      pledgeList:true
                    }
                  }
                }
              }
            }
          }
        }
    })   
    console.log(data)
    reply.send(data) 

  }catch(err){
    console.log(err)
    reply.send(err)
  }
}



module.exports = {
  createNewProject,
  updateOneProject,
  deleteOneProject,
  getOneProject,
  getAllProjects,
  getOneStarterAllProjects,
  searchProject,
  getInvestedProjects
}
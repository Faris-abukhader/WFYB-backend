var userObj = {}
var starterObj = {}
var backerObj = {}
var projectObj = {}
var rewardObj = {}
var pledgeObj = {}
var commentObj = {}
var replyObj = {}

userObj = {
    type:'object',
    properties:{
      id: {type:'string'},
      email: {type:'string'},
      password: {type:'string'},
      firstName: {type:'string'},
      lastName: {type:'string'},
      nationality: {type:'string'},  
      avatar: {type:'string'},  
      accountType: {type:'string'}, 
      isVerified: {type:'boolean'},   
      verifiedDate: {type:'string'},  
      token: {type:'string'},  
      createdAt: {type:'string'},  
      lastUpdate: {type:'string'},  
      starter:starterObj,
      backer:backerObj,
    }
  }

starterObj = {
    type:'object',
    properties:{
    userId: {type:'string'},
    user :userObj,
    shortIntro: {type:'string'},
    projects: {
     type:'array',
     items:projectObj
    },
  }
}


backerObj = {
    type:'object',
    properties:{
        userId: {type:'string'},
        user :userObj,
        comments: {
        type:'array',
        items:commentObj
        },
        pledges: {
            type:'array',
            items:pledgeObj
        },    
    }
}


projectObj = {
    type:'object',
    properties:{
        id: {type:'string'},
        ownerId: {type:'string'},
        owne :userObj,
        category: {type:'string'},
        country: {type:'string'},
        title: {type:'string'},
        description: {type:'string'},
        shortIntro: {type:'string'},
        projectImage: {type:'string'},
        compaignDurationEnd: {type:'string'},
        fundingGoal: {type:'string'},
        risksAndChallenges: {type:'string'},
        projectType: {type:'string'},
        createdAt: {type:'string'},  
        lastUpdate: {type:'string'},    
        rewardList: {
            type:'array',
            items:rewardObj
        },    
        comments: {
        type:'array',
        items:commentObj
        },
        pledgeList: {
            type:'array',
            items:pledgeObj
        },    
    }
}

rewardObj = {
    type:'object',
    properties:{
        id: {type:'string'},
        projectId: {type:'string'},
        project :projectObj,
        title: {type:'string'},
        amount: {type:'number'},
        description: {type:'string'},
        pledges: {
            type:'array',
            items:pledgeObj
        },    
    }
}
  
pledgeObj = {
 type:'object',
 properties:{
    id: {type:'string'},
    projectId: {type:'string'},
    project :projectObj,
    backerId: {type:'string'},
    backer:backerObj,
    rewardId: {type:'string'},
    reward:rewardObj,
    amount: {type:'number'},
    country: {type:'string'},
 }
}

commentObj = {
   type:'object',
   properties:{
       id: {type:'string'},
       projectId: {type:'string'},
       project :projectObj,
       backerId: {type:'string'},
       backer:backerObj,
       content: {type:'string'},
       createdAt: {type:'string'},
   }
}


replyObj = {
    type:'object',
    properties:{
        id: {type:'string'},
        commentId: {type:'string'},
        comment :commentObj,
        ownerId: {type:'string'},
        owner:userObj,
        content: {type:'string'},
        createdAt: {type:'string'},
    }
 }

module.exports = {
    userObj,
    starterObj,
    backerObj,
    projectObj,
    rewardObj,
    pledgeObj,
    commentObj,
    replyObj
}
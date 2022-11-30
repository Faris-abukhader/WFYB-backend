const {
  createNewProject,
  updateOneProject,
  deleteOneProject,
  getAllProjects,
  getOneStarterAllProjects,
  searchProject,
  getInvestedProjects
} =  require('./projectController')

const { projectObj, rewardObj, backerObj} = require('../util/schemaContainer')
const { starterMiddleware } = require('../preValidation/starterMiddleware')
const { websiteMiddleware } = require('../preValidation/websiteMiddleware')
const { backerMiddleware } = require('../preValidation/backerMiddleware')


const createNewProjectSchema = {
  schema: {
    tags: ['project'],
      body: {
        type: 'object',
        required: ['ownerId','category','country','title','description','shortIntro','projectImage','compaignDurationEnd','fundingGoal','rewardList','risksAndChallenges','projectType'],
        properties:{
          ownerId : {type:'string'},
          category : {type:'string'},
          country : {type:'string'},
          title : {type:'string'},
          description : {type:'string'},
          shortIntro : {type:'string'},
          projectImage : {type:'string'},
          compaignDurationEnd : {type:'string'},
          fundingGoal : {type:'string'},
          rewardList : {
            type:'array',
            items:rewardObj
          },
          risksAndChallenges : {type:'string'},
          projectType : {type:'string'},
        }
      },
      response:{
          200:projectObj
      }
    },
  preValidation:starterMiddleware,
  handler:createNewProject
}



const updateOneProjectSchema = {
  schema: {
    tags: ['project'],
      body: {
        type: 'object',
        required: ['category','country','title','description','shortIntro','projectImage','compaignDurationEnd','fundingGoal','rewardList','risksAndChallenges','projectType'],
        properties:{
          category : {type:'string'},
          country : {type:'string'},
          title : {type:'string'},
          description : {type:'string'},
          shortIntro : {type:'string'},
          projectImage : {type:'string'},
          compaignDurationEnd : {type:'string'},
          fundingGoal : {type:'string'},
          rewardList : {
            type:'array',
            items:rewardObj
          },
          risksAndChallenges : {type:'string'},
          projectType : {type:'string'},
        }
      },
      response:{
          200:projectObj
      }
    },
  preValidation:starterMiddleware,
  handler:updateOneProject
}




const deleteOneProjectSchema = {
  schema: {
    tags: ['project'],
      params: {
        type: 'object',
        required: ['id'],
        properties:{
          id : {type:'string'},
        }
      },
      response:{
          200:projectObj
      }
    },
  preValidation:starterMiddleware,
  handler:deleteOneProject
}

const getAllProjectsSchema = {
  schema: {
    tags: ['project'],
      params: {
        type: 'object',
        properties:{
          pageNumber : {type:'integer'},
        }
      },
      response: {
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: projectObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
      },
    },
  preValidation:websiteMiddleware,
  handler:getAllProjects
}


const getOneStarterAllProjectsSchema = {
  schema: {
    tags: ['project'],
      params: {
        type: 'object',
        required:['id'],
        properties:{
          id : {type:'string'},
          pageNumber : {type:'integer'},
        }
      },
      response: {
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: projectObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
      },
    },
  preValidation:websiteMiddleware,
  handler:getOneStarterAllProjects
}

const getInvestedProjectsSchema = {
  schema: {
    tags: ['project'],
      params: {
        type: 'object',
        required:['id'],
        properties:{
          id : {type:'string'},
          pageNumber : {type:'integer'},
        }
      },
      response:{
        200:backerObj
      },
    },
  preValidation:backerMiddleware,
  handler:getInvestedProjects
}



const searchProjectSchema = {
  schema: {
    tags: ['project'],
      querystring:{
        type: 'object',
        required:['title'],
        properties:{
          title : {type:'string'},
        }
      },
      response: {
        200:{
          type: 'object',
          properties: {
            data:{
              type: 'array',
              item: projectObj,
            },          
            pageNumber: { type: 'integer' },
          }
        }
      },
    },
  preValidation:websiteMiddleware,
  handler:searchProject
}


module.exports = {
  createNewProjectSchema,
  updateOneProjectSchema,
  deleteOneProjectSchema,
  getAllProjectsSchema,
  getOneStarterAllProjectsSchema,
  searchProjectSchema,
  getInvestedProjectsSchema

}
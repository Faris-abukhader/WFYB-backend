const {
  addToMarkbook,
  deleteOneMarkbook,
  getOneUserAllMarkbooks,
} =  require('./bookmarkController')

const { bookmarkObj} = require('../util/schemaContainer')
const { backerMiddleware } = require('../preValidation/backerMiddleware')


const addToMarkbookSchema = {
  schema: {
    tags: ['project'],
      body: {
        type: 'object',
        required: ['backerId','projectId'],
        properties:{
          backerId : {type:'string'},
          projectId : {type:'string'},
        }
      },
      response:{
          200:bookmarkObj
      }
    },
  preValidation:backerMiddleware,
  handler:addToMarkbook
}

const deleteOneMarkbookSchema = {
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
          200:bookmarkObj
      }
    },
  preValidation:backerMiddleware,
  handler:deleteOneMarkbook
}

const getOneBackerAllBookmarksSchema = {
  schema: {
    tags: ['project'],
      params: {
        type: 'object',
        required:['id'],
        properties:{
          id : {type:'string'},
        }
      },
      response: {
        200:{
          type: 'array',
          items:bookmarkObj
        }
      },
    },
  preValidation:backerMiddleware,
  handler:getOneUserAllMarkbooks
}

module.exports = {
  addToMarkbookSchema,
  deleteOneMarkbookSchema,
  getOneBackerAllBookmarksSchema
}
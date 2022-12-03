const {
  addToMarkbook,
  deleteOneMarkbook,
  getOneUserAllMarkbooks,
} =  require('./bookmarkController')

const { bookmarkObj, backerObj} = require('../util/schemaContainer')
const { backerMiddleware } = require('../preValidation/backerMiddleware')


const addToMarkbookSchema = {
  schema: {
    tags: ['bookmark'],
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
    tags: ['bookmark'],
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
    tags: ['bookmark'],
      params: {
        type: 'object',
        required:['id'],
        properties:{
          id : {type:'string'},
        }
      },
      response:200,
    },
  preValidation:backerMiddleware,
  handler:getOneUserAllMarkbooks
}

module.exports = {
  addToMarkbookSchema,
  deleteOneMarkbookSchema,
  getOneBackerAllBookmarksSchema
}
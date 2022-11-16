const {
  createNewComment,
  updateOneComment,
  deleteOneComment
} = require('./commentController')

const { commentObj } = require('../util/schemaContainer')
const { backerMiddleware } = require('../preValidation/backerMiddleware')


const createNewCommentSchema = {
  schema: {
    tags: ['comment'],
    body: {
      type: 'object',
      required: ['projectId', 'backerId', 'content'],
      properties: {
        projectId: { type: 'string' },
        backerId: { type: 'string' },
        content: { type: 'string' },
      }
    },
    response: {
      200: commentObj
    }
  },
  preValidation: backerMiddleware,
  handler: createNewComment
}


const updateOneCommentSchema = {
  schema: {
    tags: ['comment'],
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
      }
    },
    body: {
      type: 'object',
      required: ['content'],
      properties: {
        content: { type: 'string' },
      }
    },
    response: {
      200: commentObj
    }
  },
  preValidation: backerMiddleware,
  handler: updateOneComment
}


const deleteOneCommentSchema = {
  schema: {
    tags: ['comment'],
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
      }
    },
    response: {
      200: commentObj
    }
  },
  preValidation: backerMiddleware,
  handler: deleteOneComment
}


module.exports = {
  createNewCommentSchema,
  updateOneCommentSchema,
  deleteOneCommentSchema
}
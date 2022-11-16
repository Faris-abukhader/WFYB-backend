const {
  createNewReply,
  updateOneReply,
  deleteOneReply
} = require('./replyController')

const { replyObj } = require('../util/schemaContainer')
const { starterMiddleware } = require('../preValidation/starterMiddleware')


const createNewReplySchema = {
  schema: {
    tags: ['reply'],
    body: {
      type: 'object',
      required: ['projectId','commentId','ownerId','content'],
      properties: {
        projectId: { type: 'string' },
        commentId: { type: 'string' },
        ownerId: { type: 'string' },
        content: { type: 'string' },
      }
    },
    response: {
      200: replyObj
    }
  },
  preValidation: starterMiddleware,
  handler: createNewReply
}


const updateOneReplySchema = {
  schema: {
    tags: ['reply'],
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
      200: replyObj
    }
  },
  preValidation: starterMiddleware,
  handler: updateOneReply
}


const deleteOneReplySchema = {
  schema: {
    tags: ['reply'],
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
      }
    },
    response: {
      200: replyObj
    }
  },
  preValidation: starterMiddleware,
  handler: deleteOneReply
}


module.exports = {
  createNewReplySchema,
  updateOneReplySchema,
  deleteOneReplySchema
}
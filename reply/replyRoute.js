const {
  createNewReplySchema,
  updateOneReplySchema,
  deleteOneReplySchema
} = require('./replySchema')

const replyRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createNewReplySchema)

    fastify.put('/:id', updateOneReplySchema)

    fastify.delete('/:id', deleteOneReplySchema)
    
}
  
module.exports = replyRoutes
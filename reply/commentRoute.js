const {
  createNewCommentSchema,
  updateOneCommentSchema,
  deleteOneCommentSchema
} = require('./commentSchema')

const commentRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createNewCommentSchema)

    fastify.put('/:id', updateOneCommentSchema)

    fastify.delete('/:id', deleteOneCommentSchema)
    
}
  
module.exports = commentRoutes
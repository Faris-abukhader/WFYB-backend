const {
  addToMarkbookSchema,
  deleteOneMarkbookSchema,
  getOneBackerAllBookmarksSchema
} = require('./bookmarkSchema')

const bookmarkRoutes = async(fastify, options, done)=> {

    fastify.post('/', addToMarkbookSchema)
  
    fastify.delete('/:id', deleteOneMarkbookSchema)

    fastify.get('/backer/:id', getOneBackerAllBookmarksSchema)
    
}
  
module.exports = bookmarkRoutes
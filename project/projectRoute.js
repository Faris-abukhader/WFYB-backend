const {
  createNewProjectSchema,
  updateOneProjectSchema,
  deleteOneProjectSchema,
  getAllProjectsSchema,
  getOneStarterAllProjectsSchema,
  searchProjectSchema
} = require('./projectSchema')

const starterRoutes = async(fastify, options, done)=> {

    fastify.post('/', createNewProjectSchema)
  
    fastify.put('/:id', updateOneProjectSchema)

    fastify.delete('/:id', deleteOneProjectSchema)

    fastify.get('/all/:pageNumber?', getAllProjectsSchema)

    fastify.get('/starter/:id/:pageNumber?', getOneStarterAllProjectsSchema)

    fastify.get('/search/:pageNumber?', searchProjectSchema)
    
}
  
module.exports = starterRoutes
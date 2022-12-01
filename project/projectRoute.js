const {
  createNewProjectSchema,
  updateOneProjectSchema,
  deleteOneProjectSchema,
  getOneProjectSchema,
  getAllProjectsSchema,
  getOneStarterAllProjectsSchema,
  searchProjectSchema,
  getInvestedProjectsSchema
} = require('./projectSchema')

const projectRoutes = async(fastify, options, done)=> {

    fastify.post('/', createNewProjectSchema)
  
    fastify.put('/:id', updateOneProjectSchema)

    fastify.delete('/:id', deleteOneProjectSchema)

    fastify.get('/all/:pageNumber?', getAllProjectsSchema)

    fastify.get('/starter/:id/:pageNumber?', getOneStarterAllProjectsSchema)

    fastify.get('/investedProject/:id/:pageNumber?', getInvestedProjectsSchema)

    fastify.get('/search/:pageNumber?', searchProjectSchema)

    fastify.get('/:id', getOneProjectSchema)
    
}
  
module.exports = projectRoutes
const {
  updateOneStarterSchema,
} = require('./starterSchema')

const starterRoutes = async(fastify, options, done)=> {
  
    fastify.put('/:id', updateOneStarterSchema)
    
}
  
module.exports = starterRoutes
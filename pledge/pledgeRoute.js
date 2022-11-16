const {
  createNewPledgeSchema,
} = require('./pledgeSchema')

const pledgeRoutes = async(fastify, options, done)=> {
  
    fastify.post('/', createNewPledgeSchema)
    
}
  
module.exports = pledgeRoutes
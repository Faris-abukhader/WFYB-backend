const {
  signUpSchema,
  signInSchema,
  verifySchema,
  resendVerifyingEmailSchema,
  updateOneUserSchema
} = require('./authSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/signUp', signUpSchema)

    fastify.post('/signIn',signInSchema)

    fastify.get('/verify',verifySchema)

    fastify.get('/resendVerifyEmail/:email',resendVerifyingEmailSchema)

    fastify.put('/:id',updateOneUserSchema)
    
}
  
module.exports = authRoutes
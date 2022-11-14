const {
  signUpSchema,
  signInSchema,
  verifySchema,
  resendVerifyingEmailSchema,
} = require('./authSchema')

const authRoutes = async(fastify, options, done)=> {
  
    fastify.post('/signUp', signUpSchema)

    fastify.post('/signIn',signInSchema)

    fastify.get('/verify',verifySchema)

    fastify.get('/resendVerifyEmail/:email',resendVerifyingEmailSchema)
    
}
  
module.exports = authRoutes
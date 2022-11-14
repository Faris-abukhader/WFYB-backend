const Fastify = require('fastify')
const PORT = process.env.PORT || 4500
const fastify = Fastify({logger: true})
const { docOptions } = require('./util/docGeneratorOptions')


const buildUpDocs = async (options) => {
  await fastify.register(require('@fastify/swagger'), options)
}
try{
  buildUpDocs(docOptions)
}catch(err){
  console.log(err)
}

// routes . . . 
fastify.register(require('./route/todo'),{ prefix: '/todo' })


const start = async () => {
  try {
    await fastify.listen({ port: PORT ,host:'0.0.0.0'})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


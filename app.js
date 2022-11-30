const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const Fastify = require('fastify')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
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
fastify.register(require('./auth/authRoute'),{ prefix: '/auth' })
fastify.register(require('./starter/starterRoute'),{ prefix: '/starter' })
fastify.register(require('./project/projectRoute'),{ prefix: '/project' })
fastify.register(require('./pledge/pledgeRoute'),{ prefix: '/pledge' })
fastify.register(require('./comment/commentRoute'),{ prefix: '/comment' })
fastify.register(require('./reply/replyRoute'),{ prefix: '/reply' })
fastify.register(require('./bookmark/bookmarkRoute'),{ prefix: '/bookmark' })


const start = async () => {
  try {
    await fastify.listen({ port: PORT ,host:'0.0.0.0'})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

const createStarter = async()=>{
  const password =  bcrypt.hashSync('12345', 10);
  const starter = await prisma.user.create({
    data:{
      firstName:'fares',
      lastName:'abukhader',
      email:'fares@yahoo.com',
      password,
      accountType:'s',
      token:'',
      avatar:'avatar-1.svg',
      starter:{
        create:{
          shortIntro:''
        }
      }
    }
  })

  const token = jwt.sign({id:starter.id},process.env.JWT_SECRET)

  const target = await prisma.user.update({
    where:{
      id:starter.id,
    },
    data:{
      token
    }
  })
  console.log(target)
}
const createbacker = async()=>{
  const password =  bcrypt.hashSync('12345', 10);
  const backer = await prisma.user.create({
    data:{
      firstName:'raed',
      lastName:'abukhader',
      email:'raed@yahoo.com',
      password,
      accountType:'b',
      token:'',
      avatar:'avatar-5.svg',
      backer:{
        create:{}
      }
    }
  })

  const token = jwt.sign({id:backer.id},process.env.JWT_SECRET)

  const target = await prisma.user.update({
    where:{
      id:backer.id,
    },
    data:{
      token
    }
  })
  console.log(target)
}

// createStarter()
// createbacker()

// console.log(new Date())
const {
  signUp,
  signIn,
  verify,
  resendVerifyingEmail,
  updateOneUser,
  updateOneUserAvatar
} =  require('./authController')

const {userObj} = require('../util/schemaContainer')
const { websiteMiddleware } = require('../preValidation/websiteMiddleware')
const { userMiddleware } = require('../preValidation/userMiddleware')


const signUpSchema = {
    schema: {
      tags: ['auth'],
        body: {
          type: 'object',
          required: ['email','password','firstName','lastName','accountType'],
          properties:{
            email : {type:'string'},
            password : {type:'string'},
            firstName : {type:'string'},
            lastName : {type:'string'},
            accountType : {type:'string'},
          }
        },
        response:{
            200:userObj
        }
      },
      preValidation:websiteMiddleware,
      handler:signUp
}


const signInSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['email','password'],
        properties:{
          email : {type:'string'},
          password : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    preValidation:websiteMiddleware,
    handler:signIn
}


const verifySchema = {
  schema: {
    tags: ['auth'],
      response:200
    },
    preValidation:websiteMiddleware,
    handler:verify
}


const resendVerifyingEmailSchema = {
  schema: {
    tags: ['auth'],
      params: {
        type: 'object',
        required: ['email'],
        properties:{
          email : {type:'string'},
        }
      },
      response:{
        200:{
          message : {type:'string'}
        }
      }
    },
    preValidation:websiteMiddleware,
    handler:resendVerifyingEmail
}


const updateOneUserSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['firstName','lastName'],
        properties:{
          nationality : {type:'string'},
          avatar : {type:'string'},
          firstName : {type:'string'},
          lastName : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    preValidation:userMiddleware,
    handler:updateOneUser
}

const updateOneUserAvatarSchema = {
  schema: {
    tags: ['auth'],
      body: {
        type: 'object',
        required: ['avatar'],
        properties:{
          avatar : {type:'string'},
        }
      },
      response:{
          200:userObj
      }
    },
    preValidation:userMiddleware,
    handler:updateOneUser
}

module.exports = {
    signUpSchema,
    signInSchema,
    verifySchema,
    resendVerifyingEmailSchema,
    updateOneUserSchema,
    updateOneUserAvatarSchema
}
const {
  createNewPledge,
} =  require('./pledgeController')

const { commentObj} = require('../util/schemaContainer')
const { backerMiddleware } = require('../preValidation/backerMiddleware')


const createNewPledgeSchema = {
    schema: {
      tags: ['pledge'],
        body: {
          type: 'object',
          required: ['projectId','backerId','content'],
          properties:{
            projectId : {type:'string'},
            backerId : {type:'string'},
            content : {type:'string'},
          }
        },
        response:{
            200:commentObj
        }
      },
      preValidation:backerMiddleware,
      handler:createNewPledge
}

module.exports = {
  createNewPledgeSchema,
}
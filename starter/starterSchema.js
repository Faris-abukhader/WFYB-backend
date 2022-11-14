const {
  updateOneStarter,
} =  require('./starterController')

const { starterObj} = require('../util/schemaContainer')
const { starterMiddleware } = require('../preValidation/starterMiddleware')


const updateOneStarterSchema = {
    schema: {
      tags: ['starter'],
        body: {
          type: 'object',
          required: ['shortIntro'],
          properties:{
            shortIntro : {type:'string'},
          }
        },
        response:{
            200:starterObj
        }
      },
      preValidation:starterMiddleware,
      handler:updateOneStarter

}


module.exports = {
    updateOneStarterSchema,
}
const {   
    todoObj,
  } = require('../schema/todoSchema')
  

const docOptions = {
    routePrefix: '/doc',
    swagger: {
      info: {
        title: 'Todo Api End Point',
        description: 'Testing the Todo API',
        version: '0.1.0'
      },
      host: 'localhost',
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'todo', description: 'Todo related end-points' },
      ],
      definitions: {
        Todo:todoObj,
      },
    },
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
    defaultModelsExpandDepth: 1 
  }
    
module.exports = {docOptions}
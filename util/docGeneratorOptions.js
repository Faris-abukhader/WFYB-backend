const {   
  userObj,
  starterObj,
  backerObj,
  projectObj,
  rewardObj,
  pledgeObj,
  commentObj,  
  } = require('./schemaContainer')
  

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
        { name: 'user', description: 'User or auth related end-points' },
        { name: 'starter', description: 'Starter related end-points' },
        { name: 'backer', description: 'Backer related end-points' },
        { name: 'project', description: 'Project related end-points' },
        { name: 'reward', description: 'Reward related end-points' },
        { name: 'pledge', description: 'Pledge related end-points' },
        { name: 'comment', description: 'Comment related end-points' },
      ],
      definitions: {
        User:userObj,
        Starter:starterObj,
        Backer:backerObj,
        Project:projectObj,
        Reward:rewardObj,
        Pledge:pledgeObj,
        Comment:commentObj,
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
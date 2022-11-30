const {   
  userObj,
  starterObj,
  backerObj,
  projectObj,
  rewardObj,
  pledgeObj,
  commentObj,
  replyObj,  
  } = require('./schemaContainer')
  

const docOptions = {
    routePrefix: '/doc',
    swagger: {
      info: {
        title: 'WFYB Api End Point',
        description: 'Testing the WFYB API',
        version: '0.1.0'
      },
      host: 'localhost',
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'auth', description: 'Auth related end-points' },
        { name: 'starter', description: 'Starter related end-points' },
        { name: 'project', description: 'Project related end-points' },
        { name: 'pledge', description: 'Pledge related end-points' },
        { name: 'comment', description: 'Comment related end-points' },
        { name: 'reply', description: 'Reply related end-points' },
      ],
      definitions: {
        User:userObj,
        Starter:starterObj,
        Backer:backerObj,
        Project:projectObj,
        Reward:rewardObj,
        Pledge:pledgeObj,
        Comment:commentObj,
        Reply:replyObj
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
const {Entity,Schema} = require('redis-om')
const {client} = require('../redisClient')
class Project extends Entity {}

const projectSchema = new Schema(Project,{
    id: {type:'string',indexed:true},
    title: {type:'string'},
    compaignDurationEnd: {type:'string'},
    fundingGoal: {type:'string'},
    category: {type:'string'},
    pledgeList: {type:'string[]'}
    },  
    {
    dataStructure: 'JSON'
  } 
)

module.exports = {projectRepository:client.fetchRepository(projectSchema)}
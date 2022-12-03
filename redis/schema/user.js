const {Entity,Schema} = require('redis-om')
const {client} = require('../redisClient')
class User extends Entity {}

const userSchema = new Schema(User,{
    email:{type:'string'},
    password:{type:'string'}
})

module.exports = {userRepository:client.fetchRepository(userSchema)}
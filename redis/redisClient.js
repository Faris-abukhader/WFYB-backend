const {Client} = require('redis-om')
const client = new Client()

client.open('redis://localhost:6379')

module.exports = {client}
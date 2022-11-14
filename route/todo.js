const {
    createOneTodoSchema,
    updateOneTodoSchema,
    deleteOneTodoSchema,
    deleteManyTodoSchema,
    getOneTodoSchema,
    getAllTodoSchema,
} = require('../schema/todoSchema')

const itemRoutes = async(fastify, options, done)=> {

    fastify.post('/',createOneTodoSchema)

    fastify.put('/:id',updateOneTodoSchema)

    fastify.delete('/',deleteManyTodoSchema)

    fastify.delete('/:id',deleteOneTodoSchema)

    fastify.get('/all',getAllTodoSchema)

    fastify.get('/:id',getOneTodoSchema)

}

module.exports = itemRoutes
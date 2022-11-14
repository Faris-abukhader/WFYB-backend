const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const createNewTodo = async(req,reply)=>{
    try{
        const {content,priority,isDone} = req.body
        const newTodo = await prisma.todo.create({
            data:{
             content,
             priority,
             isDone
            }
        })

        reply.send(newTodo)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const updateOneTodo = async(req,reply)=>{
    try{
        const {id} = req.params
        const {content,priority,isDone} = req.body
        const targetTodo = await prisma.todo.update({
            where:{
                id,
            },
            data:{
             content,
             priority,
             isDone
            }
        })

        reply.send(targetTodo)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const deleteOneTodo = async(req,reply)=>{
    try{
        const {id} = req.params
        const targetTodo = await prisma.todo.delete({
            where:{
                id,
            },
        })

        reply.send(targetTodo)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const deleteManyTodo = async(req,reply)=>{
    try{
        const {ids} = req.body
        console.log(ids)
        const targetTodo = await prisma.todo.deleteMany({
            where:{
                id:{
                    in:ids
                }
            },
        })

        reply.send(targetTodo)


    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getOneTodo = async(req,reply)=>{
    try{
        const {id} = req.params
        const targetTodo = await prisma.todo.findUnique({
            where:{
                id,
            },
        })

        reply.send(targetTodo)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}

const getAllTodo = async(req,reply)=>{
    try{
        const todos = await prisma.todo.findMany({})
        reply.send(todos)

    }catch(err){
        console.log(err)
        reply.send(err)
    }
}



module.exports = {
    createNewTodo,
    updateOneTodo,
    deleteOneTodo,
    deleteManyTodo,
    getOneTodo,
    getAllTodo,
}


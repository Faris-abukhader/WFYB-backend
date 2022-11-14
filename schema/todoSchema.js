const {
  createNewTodo,
  updateOneTodo,
  deleteOneTodo,
  deleteManyTodo,
  getOneTodo,
  getAllTodo,
} = require('../controller/todo')

const todoObj = {
  type:'object',
  properties:{
    id: {type:'string'},
    content: {type:'string'},
    priority: {type:'integer'},
    isDone: {type:'boolean'},
    createdAt: {type:'string'},
    lastUpdate: {type:'string'},  
  }
}

const createOneTodoSchema = {
    schema: {
      tags:['todo'],
        body: {
          type: 'object',
          required: ['content','priority','isDone'],
          properties:{
            content: {type:'string'},
            priority: {type:'integer'},
            isDone: {type:'boolean'},
          }
        },
        response:200
      },
      handler:createNewTodo
}

const updateOneTodoSchema = {
    schema: {
      tags:['todo'],
      params:{
        type: 'object',
        required:['id'],
        properties:{
          id: {type:'string'},
        }
      },
      body: {
        type: 'object',
        required: ['content','priority','isDone'],
        properties:{
          content: {type:'string'},
          priority: {type:'integer'},
          isDone: {type:'boolean'},
        }
      },
        response:200
      },
      handler:updateOneTodo
}


const deleteOneTodoSchema = {
  schema: {
    tags:['todo'],
    params:{
      type: 'object',
      required:['id'],
      properties:{
        id: {type:'string'},
      }
    },
    response:200
    },
    handler:deleteOneTodo
}

const deleteManyTodoSchema = {
  schema: {
    tags:['todo'],
    body:{
      type:'object',
      properties:{
        ids:{
          type:'array',
          items:{type:'string'}
        }
      }
    },
    response:200
    },
    handler:deleteManyTodo
}


const getOneTodoSchema = {
  schema: {
    tags:['todo'],
    params:{
      type: 'object',
      required:['id'],
      properties:{
        id: {type:'string'},
      }
    },
    response:{
      200:todoObj
    }
    },
    handler:getOneTodo
}


const getAllTodoSchema = {
  schema: {
    tags:['todo'],
    response:{
      200:{
        type:'array',
        items:todoObj  
      }
    }
    },
    handler:getAllTodo
}
 
 
 

module.exports = {
    todoObj,
    createOneTodoSchema,
    updateOneTodoSchema,
    deleteOneTodoSchema,
    deleteManyTodoSchema,
    getOneTodoSchema,
    getAllTodoSchema,
}
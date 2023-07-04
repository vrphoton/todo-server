import { CB, TodoInfo } from "../../types/todo";
import Todo from "../../models/todo"

async function getTodos(cb:CB) {
    let result = await Todo.getTodos();
    if(result?.length) {
        cb(null, result);
        return;
    }
    cb(new Error("An error occured while getting all the todos"), null);
}


async function addTodo(data:TodoInfo, cb:CB) {
    const newTodo:any      = new Todo(data);
    const result:TodoInfo  = await newTodo.addTodo(data);
    if(result && Object.keys(result).length) {
        cb(null, result);
        return;
    }
    cb(new Error("An error occured while saving the todo"), null);
}

async function updateTodo(id:string, data:TodoInfo, cb:CB) {
    const result:TodoInfo  = await Todo.updateTodo(id, data, {});
    if(result && Object.keys(result).length) {
        cb(null, result);
        return;
    }
    cb(new Error("An error occured while saving the todo"), null);
}

async function deleteTodo(id:string, cb:CB) {
    const result:TodoInfo  = await Todo.deleteTodo(id);
    if(result && Object.keys(result).length) {
        cb(null, result);
        return;
    }
    cb(new Error("An error occured while saving the todo"), null);
}

export default {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}
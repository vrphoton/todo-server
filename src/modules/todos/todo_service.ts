import { TodoInfo, CB } from "../../types/todo";
import TodoDio from "../todos/todo_dio";

function getTodos(cb:CB) {
    TodoDio.getTodos(function(error:Error|null, result:TodoInfo[]) {
        if(error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}


function addTodo(data:TodoInfo, cb:CB) {
    TodoDio.addTodo(data, function(error:Error|null, result:TodoInfo[]) {
        if(error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}

function updateTodo(id:string, data:TodoInfo, cb:CB) {
    TodoDio.updateTodo(id, data, function(error:Error|null, result:TodoInfo[]) {
        if(error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}

function deleteTodo(id:string, cb:CB) {
    TodoDio.deleteTodo(id, function(error:Error|null, result:TodoInfo[]) {
        if(error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}

export default {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}
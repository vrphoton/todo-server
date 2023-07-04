import { NextFunction, Request, Response } from "express";
import { TodoInfo } from "../../types/todo";
import ToDoService from "../todos/todo_service";

function getTodos(req:Request, res:Response, next:NextFunction) {
    ToDoService.getTodos(function(error:Error|null, result:TodoInfo[]) {
        if(error) { 
            res.status(401).send(error);
            return;
        }
        res.status(200).send(result); 
    });
}


async function addTodo(req:Request, res:Response, next:NextFunction):Promise<any> {
    let todoDetails:any = getTodoDetails(req.body);
    let isValidData     = await validateTodoData(todoDetails);
    if(isValidData.valid) {
        ToDoService.addTodo(todoDetails, function(error:Error|null, result:TodoInfo) {
            if(error) {
                return res.status(401).send(error);
            }
            res.status(201).send(result);
        });
    }
    else {
        res.status(401).send("Validation error occurs....");
    }
}

async function updateTodo(req:Request, res:Response, next:NextFunction):Promise<any> {
    let todoId:string   = req.params.id;
    let todoDetails:any = getTodoDetails(req.body);
    let isValidData     = await validateTodoData(todoDetails);
    if(isValidData.valid) {
        ToDoService.updateTodo(todoId, todoDetails, function(error:Error|null, result:TodoInfo) {
            if(error) {
                return res.status(401).send(error);
            }
            res.status(201).send(result);
        });
    }
    else {
        res.status(401).send("Validation error occurs....");
    }
}

function deleteTodo(req:Request, res:Response, next:NextFunction) {
    let todoId:string   = req.params.id;
    if(todoId) {
        ToDoService.deleteTodo(todoId, function(error:Error|null, result:TodoInfo) {
            if(error) {
                return res.status(401).send(error);
            }
            res.status(201).send(result);
        });
    }
    else {
        res.status(401).send("To do ID is required to delete the ToDo...");
    }
}

function getTodoDetails (inputData:TodoInfo) {
    return {
        name        : inputData.name,
        description : inputData.description,
        status      : inputData.status
    }
}

function validateTodoData (data:TodoInfo) {
    if(!(data.name && data.description) && (!data.status && data.status !== false)) {
        return {message : "All details are required to add TODO"};
    }
    else {
        return {valid : true};
    }
}

export default {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}
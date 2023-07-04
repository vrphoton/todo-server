"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("../todos/todo_service"));
function getTodos(req, res, next) {
    todo_service_1.default.getTodos(function (error, result) {
        if (error) {
            res.status(401).send(error);
            return;
        }
        res.status(200).send(result);
    });
}
function addTodo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let todoDetails = getTodoDetails(req.body);
        let isValidData = yield validateTodoData(todoDetails);
        if (isValidData.valid) {
            todo_service_1.default.addTodo(todoDetails, function (error, result) {
                if (error) {
                    return res.status(401).send(error);
                }
                res.status(201).send(result);
            });
        }
        else {
            res.status(401).send("Validation error occurs....");
        }
    });
}
function updateTodo(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let todoId = req.params.id;
        let todoDetails = getTodoDetails(req.body);
        let isValidData = yield validateTodoData(todoDetails);
        if (isValidData.valid) {
            todo_service_1.default.updateTodo(todoId, todoDetails, function (error, result) {
                if (error) {
                    return res.status(401).send(error);
                }
                res.status(201).send(result);
            });
        }
        else {
            res.status(401).send("Validation error occurs....");
        }
    });
}
function deleteTodo(req, res, next) {
    let todoId = req.params.id;
    if (todoId) {
        todo_service_1.default.deleteTodo(todoId, function (error, result) {
            if (error) {
                return res.status(401).send(error);
            }
            res.status(201).send(result);
        });
    }
    else {
        res.status(401).send("To do ID is required to delete the ToDo...");
    }
}
function getTodoDetails(inputData) {
    return {
        name: inputData.name,
        description: inputData.description,
        status: inputData.status
    };
}
function validateTodoData(data) {
    if (!(data.name && data.description) && (!data.status && data.status !== false)) {
        return { message: "All details are required to add TODO" };
    }
    else {
        return { valid: true };
    }
}
exports.default = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
};

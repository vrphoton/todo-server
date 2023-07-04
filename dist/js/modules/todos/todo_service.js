"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_dio_1 = __importDefault(require("../todos/todo_dio"));
function getTodos(cb) {
    todo_dio_1.default.getTodos(function (error, result) {
        if (error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}
function addTodo(data, cb) {
    todo_dio_1.default.addTodo(data, function (error, result) {
        if (error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}
function updateTodo(id, data, cb) {
    todo_dio_1.default.updateTodo(id, data, function (error, result) {
        if (error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}
function deleteTodo(id, cb) {
    todo_dio_1.default.deleteTodo(id, function (error, result) {
        if (error) {
            cb(error, null);
            return;
        }
        cb(null, result);
    });
}
exports.default = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
};

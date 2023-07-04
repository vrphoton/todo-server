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
const todo_1 = __importDefault(require("../../models/todo"));
function getTodos(cb) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield todo_1.default.getTodos();
        if (result === null || result === void 0 ? void 0 : result.length) {
            cb(null, result);
            return;
        }
        cb(new Error("An error occured while getting all the todos"), null);
    });
}
function addTodo(data, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTodo = new todo_1.default(data);
        const result = yield newTodo.addTodo(data);
        if (result && Object.keys(result).length) {
            cb(null, result);
            return;
        }
        cb(new Error("An error occured while saving the todo"), null);
    });
}
function updateTodo(id, data, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield todo_1.default.updateTodo(id, data, {});
        if (result && Object.keys(result).length) {
            cb(null, result);
            return;
        }
        cb(new Error("An error occured while saving the todo"), null);
    });
}
function deleteTodo(id, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield todo_1.default.deleteTodo(id);
        if (result && Object.keys(result).length) {
            cb(null, result);
            return;
        }
        cb(new Error("An error occured while saving the todo"), null);
    });
}
exports.default = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
};

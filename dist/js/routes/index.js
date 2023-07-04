"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../modules/todos/todo_controller"));
const router = (0, express_1.Router)();
router.get("/todos", todo_controller_1.default.getTodos);
router.post("/add-todo", todo_controller_1.default.addTodo);
router.put("/update-todo/:id", todo_controller_1.default.updateTodo);
router.delete("/delete-todo/:id", todo_controller_1.default.deleteTodo);
exports.default = router;

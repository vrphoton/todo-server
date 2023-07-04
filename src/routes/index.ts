import { Router } from "express";
import ToDoController from "../modules/todos/todo_controller";

const router:Router = Router();

router.get("/todos", ToDoController.getTodos);

router.post("/add-todo", ToDoController.addTodo);

router.put("/update-todo/:id", ToDoController.updateTodo);

router.delete("/delete-todo/:id", ToDoController.deleteTodo);

export default router;
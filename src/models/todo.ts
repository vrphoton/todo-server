import { model, Schema, Model } from "mongoose";
import { TodoInfo, CB } from "../types/todo";

interface TodoModel extends Model<TodoInfo> {
    getTodos(): Promise<TodoInfo[]>;
    getTodoById(id:string): Promise<TodoInfo>;
    addTodo(data:TodoInfo): Promise<TodoInfo>;
    updateTodo(id:string, data:TodoInfo, opt:object): Promise<TodoInfo>;
    deleteTodo(id:string): Promise<TodoInfo>;
}

const todoSchema:Schema = new Schema(
    {
        name : {
            type: String,
            required : true
        },
        description : {
            type: String,
            required : true
        },
        status : {
            type: Boolean,
            required : true
        }
    },
    {
        timestamps : true
    }
);

todoSchema.statics.getTodos = async function():Promise<TodoInfo> {
    return this.find({}, {__v : 0});
}

todoSchema.statics.getTodoById = async function(_id:string):Promise<TodoInfo> {
    return this.findOne({_id}, {__v : 0});
}

todoSchema.methods.addTodo = async function(data:TodoInfo):Promise<TodoInfo> {
    return this.save();
}

todoSchema.statics.updateTodo = async function(id:string, data:TodoInfo, opt):Promise<TodoInfo> {
    return this.findByIdAndUpdate(id, data);
}

todoSchema.statics.deleteTodo = async function(id:string):Promise<TodoInfo> {
    return this.findByIdAndDelete(id);
}

const Todo = model<TodoInfo, TodoModel>("Todo", todoSchema);
export default Todo
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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});
todoSchema.statics.getTodos = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return this.find({}, { __v: 0 });
    });
};
todoSchema.statics.getTodoById = function (_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.findOne({ _id }, { __v: 0 });
    });
};
todoSchema.methods.addTodo = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.save();
    });
};
todoSchema.statics.updateTodo = function (id, data, opt) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.findByIdAndUpdate(id, data);
    });
};
todoSchema.statics.deleteTodo = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.findByIdAndDelete(id);
    });
};
const Todo = (0, mongoose_1.model)("Todo", todoSchema);
exports.default = Todo;

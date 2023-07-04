"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let MONGO_URL = "mongodb://0.0.0.0:27017/Demo";
const connect = () => {
    mongoose_1.default.connect(MONGO_URL, getDBOptions())
        .then(() => {
        console.log("Successfully connected to database....");
    })
        .catch((error) => {
        console.log("An error occured while connecting to database " + error);
        process.exit(1);
    });
};
function getDBOptions() {
    return {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
}
exports.default = { connect };

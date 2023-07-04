import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let MONGO_URL:string = "mongodb://0.0.0.0:27017/Demo";

const connect = () => {
    mongoose.connect(MONGO_URL, getDBOptions() as ConnectOptions)
        .then(() => {
            console.log("Successfully connected to database....");
        })
        .catch((error) => {
            console.log("An error occured while connecting to database " + error);
            process.exit(1);
        });
}

function getDBOptions() {
    return { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export default { connect };
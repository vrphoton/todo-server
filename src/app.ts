import express, { Express } from "express";
import todoRoutes from "./routes/index";
import dotenv from "dotenv";
import db from "./config/db"

dotenv.config();
db.connect();
 
const app: Express = express();

const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", todoRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
});
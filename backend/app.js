import express from "express";
import dotenv from "dotenv";
dotenv.config();
import parser from "body-parser";
// Modules
import connectToDb from "./config/DbConnection.js";
import userRouter from "./routes/UserRoutes.js";

// App
const app = express();

// Db connection
connectToDb();

// Middlewares
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening port ${port} 👂`);
})
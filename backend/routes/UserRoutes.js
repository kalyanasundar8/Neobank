import express from "express";
import { createAccount } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/createAccount", createAccount);

export default userRouter;
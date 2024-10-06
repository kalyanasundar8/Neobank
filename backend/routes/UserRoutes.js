import express from "express";
import { createProfile, verifyOtp } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/createProfile", createProfile);
userRouter.post("/verifyOtp", verifyOtp);

export default userRouter;
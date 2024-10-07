import express from "express";
import {
  createProfile,
  setPassword,
  verifyOtp,
} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/createProfile", createProfile);
userRouter.post("/verifyOtp", verifyOtp);
userRouter.post("/setPassword", setPassword);

export default userRouter;

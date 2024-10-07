import express from "express";
import {
  createProfile,
  setPassword,
  signin,
  verifyOtp,
} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/createProfile", createProfile);
userRouter.post("/verifyOtp", verifyOtp);
userRouter.post("/setPassword", setPassword);
userRouter.post("/signin", signin);

export default userRouter;

import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import { mobileAndEmailCheck } from "../services/Validation.js";

// Desc    Create an user account
// Route   /api/user/createAccount
const createAccount = asyncHandler(async (req, res) => {
  // Get the user input
  const { userName, mobileNumber, email, address, accountType } = req.body;

  // Check mobilenumber and email is already exists
  const validation = mobileAndEmailCheck(mobileNumber, email);

  if (validation.status === 400) {
    return res.status(400).json({ message: validation.response });
  }

  const exists = await User.findOne({
    mobileNumber: mobileNumber,
    email: email,
  });

  if (!exists) {
    console.log("Not exists");
  } else {
    console.log("Already exists");
  }
});

export { createAccount };

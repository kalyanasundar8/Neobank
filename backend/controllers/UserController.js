import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import { mobileAndEmailCheck } from "../services/Validation.js";
import { generateOtp } from "../services/GenerateOtp.js";
import { generateToken } from "../services/GenerateToken.js";

// Desc    Create an user account
// Route   /api/user/createAccount
const createAccount = asyncHandler(async (req, res) => {
  // Get the user input
  const { userName, mobileNumber, email, address } = req.body;

  // Check mobilenumber and email is already exists
  const validation = mobileAndEmailCheck(mobileNumber, email);

  if (validation.status === 400) {
    return res.status(400).json({ message: validation.response });
  }

  const exists = await User.findOne({
    mobileNumber: mobileNumber,
    email: email,
  });

  const otp = generateOtp();

  if (!exists) {
    const user = await User.create({
      userName,
      mobileNumber,
      otp,
      email,
      address,
    });

    if (user) {
      return res.status(200).json({
        id: user._id,
        userName: user.userName,
        mobileNumber: user.mobileNumber,
        email: user.email,
        address: user.address,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: "Something went wrong!" });
    }
  } else {
    return res.status(400).json({ message: "User already exists, Try different mobilenumber or email" });
  }
});

export { createAccount };

import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { mobileAndEmailCheck } from "../services/Validation.js";
import { generateOtp } from "../services/GenerateOtp.js";
import { generateToken } from "../services/GenerateToken.js";

// Desc    Create an user profile
// Route   /api/user/createProfile
const createProfile = asyncHandler(async (req, res) => {
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
    return res.status(400).json({
      message: "User already exists, Try different mobilenumber or email",
    });
  }
});

// Desc    Verify OTP
// Route   /api/user/verifyOtp
const verifyOtp = asyncHandler(async (req, res) => {
  const { otp, token } = req.body;
  // Decode a token
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(401).json({ message: "Invalid (or) Expired Token" });
  }

  // Check the user verification status
  const verifiedUser = await User.findOne({
    _id: decodedToken.id,
    verified: false,
  });

  if (!verifiedUser) {
    return res.status(400).json({
      message: "User already verified or does not exist, Please Signin.",
    });
  }

  // Check the otp is valid
  const validOtp = verifiedUser.otp === otp;
  if (validOtp) {
    verifiedUser.verified = true;
    await verifiedUser.save();

    return res.status(200).json({ token });
  } else {
    return res
      .status(400)
      .json({ message: "OTP is not valid, Please check your OTP" });
  }
});

export { createProfile, verifyOtp };

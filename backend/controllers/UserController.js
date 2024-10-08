import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import { mobileAndEmailCheck } from "../services/Validation.js";
import { generateOtp } from "../services/GenerateOtp.js";
import { decodeToken, generateToken } from "../services/TokenService.js";

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

  // Token decode
  const decodedToken = decodeToken(token);

  // Check the user verification status
  const user = await User.findOne({
    _id: decodedToken.id,
  });

  if (user.verified) {
    const validOtp = user.otp === otp;
    if (validOtp) {
      return res.status(200).json({
        id: user._id,
        userName: user.userName,
        mobileNumber: user.mobileNumber,
        email: user.email,
        address: user.address,
        verified: user.verified,
      });
    } else {
      return res
        .status(400)
        .json({ message: "OTP is not valid, Please check your OTP" });
    }
  }

  // Check the otp is valid
  const validOtp = user.otp === otp;
  if (validOtp) {
    user.verified = true;
    await user.save();

    return res.status(200).json({ token });
  } else {
    return res
      .status(400)
      .json({ message: "OTP is not valid, Please check your OTP" });
  }
});

// Desc    Set password
// Route   /api/user/setPassword
const setPassword = asyncHandler(async (req, res) => {
  const { token, password, confirmPassword } = req.body;

  // Token decode
  const decodedToken = decodeToken(token);

  // Check the user verification status
  const verifiedUser = await User.findOne({
    _id: decodedToken.id,
    verified: true,
  });

  if (!verifiedUser) {
    return res.status(400).json({
      message: "Please verify your profile and set your password",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  verifiedUser.password = hashedPassword;
  await verifiedUser.save();

  return res.status(200).json({
    id: verifiedUser._id,
    name: verifiedUser.userName,
    mobileNumber: verifiedUser.mobileNumber,
    email: verifiedUser.email,
    status: verifiedUser.verified,
  });
});

// Desc    SignIn
// Route   /api/user/signin
const signin = asyncHandler(async (req, res) => {
  const { mobileNumber } = req.body;

  const userExists = await User.findOne({
    mobileNumber: mobileNumber,
    verified: true,
  });

  if (!userExists) {
    return res.status(400).json({ message: "User not exists or Not verified" });
  }

  userExists.otp = generateOtp();
  await userExists.save();

  return res.status(200).json({
    token: generateToken(userExists._id),
  });
});

export { createProfile, verifyOtp, setPassword, signin };

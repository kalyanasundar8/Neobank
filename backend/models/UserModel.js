import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    accountNumber: {
      type: Number,
    },
    userName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
      required: true,
    },
    accountStatus: {
      type: String,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", user);
export default User;

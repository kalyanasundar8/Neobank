import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  accountType: {
    type: String,
    required: true,
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
});

const BankAccount = mongoose.model("account", bankAccountSchema);
export default BankAccount;

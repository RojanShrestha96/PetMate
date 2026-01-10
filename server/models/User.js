import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["adopter", "shelter"],
    required: true,
  },
  phone: { type: String },
  shelterName: { type: String },
  address: { type: String },
});

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    enum: ["dog", "cat", "bird", "rabbit"],
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  weight: {
    type: String,
    required: true,
  },
  personality: {
    type: String,
    default: "",
  },
  behaviour: {
    type: String,
    default: "",
  },
  vaccinated: {
    type: Boolean,
    default: false,
  },
  dewormed: {
    type: Boolean,
    default: false,
  },
  sterilized: {
    type: Boolean,
    default: false,
  },
  medicalNotes: {
    type: String,
    default: "",
  },
  adoptionRequirements: {
    type: String,
    default: "",
  },
  images: {
    type: [String],
    default: [],
  },
  shelterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  adoptionStatus: {
    type: String,
    enum: ["available", "adopted", "pending"],
    default: "available",
  },
});

export default mongoose.model("Pet", petSchema);

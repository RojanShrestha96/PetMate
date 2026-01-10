import express from "express";
import {
  addPet,
  getPets,
  getPetById,
  getShelterPets,
  updatePet,
  deletePet,
} from "../controllers/petController.js";

const router = express.Router();

// Add a new pet
router.post("/add", addPet);

// Get all pets
router.get("/", getPets);

// Get a specific pet by ID
router.get("/:id", getPetById);

// Get all pets for a shelter
router.get("/shelter/pets", getShelterPets);

// Update a pet
router.put("/:id", updatePet);

// Delete a pet
router.delete("/:id", deletePet);

export default router;

import Pet from "../models/Pet.js";

export const addPet = async (req, res) => {
  try {
    const {
      name,
      species,
      breed,
      age,
      gender,
      weight,
      personality,
      behaviour,
      vaccinated,
      dewormed,
      sterilized,
      medicalNotes,
      adoptionRequirements,
      images,
      shelterId,
    } = req.body;

    // Validation
    if (!name || !species || !breed || !age || !gender || !weight) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const newPet = new Pet({
      name,
      species,
      breed,
      age,
      gender,
      weight,
      personality,
      behaviour,
      vaccinated,
      dewormed,
      sterilized,
      medicalNotes,
      adoptionRequirements,
      images: images || [],
      shelterId: shelterId || null,
    });

    await newPet.save();

    res.status(201).json({
      success: true,
      message: "Pet added successfully",
      pet: newPet,
    });
  } catch (error) {
    console.error("Error adding pet:", error);
    res.status(500).json({
      success: false,
      message: "Error adding pet",
      error: error.message,
    });
  }
};

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate("shelterId", "shelterName");
    res.status(200).json({
      success: true,
      pets,
    });
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching pets",
      error: error.message,
    });
  }
};

export const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id).populate("shelterId", "shelterName");

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      pet,
    });
  } catch (error) {
    console.error("Error fetching pet:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching pet",
      error: error.message,
    });
  }
};

export const getShelterPets = async (req, res) => {
  try {
    const shelterId = req.userId; // Assumes authenticated user
    const pets = await Pet.find({ shelterId });

    res.status(200).json({
      success: true,
      pets,
    });
  } catch (error) {
    console.error("Error fetching shelter pets:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching shelter pets",
      error: error.message,
    });
  }
};

export const updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const pet = await Pet.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pet updated successfully",
      pet,
    });
  } catch (error) {
    console.error("Error updating pet:", error);
    res.status(500).json({
      success: false,
      message: "Error updating pet",
      error: error.message,
    });
  }
};

export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await Pet.findByIdAndDelete(id);

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pet deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting pet:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting pet",
      error: error.message,
    });
  }
};

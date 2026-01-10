import User from "../models/User.js";
import bcrypt from "bcryptjs";

// SIGNUP
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, accountType, phone, shelterName, address } = req.body;

    // Check required fields
    if (!name || !email || !password || !accountType) {
      return res.status(400).json({ message: "All required fields are required" });
    }

    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      accountType,
      phone: phone || "",
      shelterName: accountType === "shelter" ? shelterName || "" : "",
      address: accountType === "shelter" ? address || "" : "",
    });

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Send safe user info
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        accountType: user.accountType,
        phone: user.phone || "",
        shelterName: user.shelterName || "",
        address: user.address || "",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

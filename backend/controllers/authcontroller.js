const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getDB } = require("../config/db");

exports.signup = async (req, res) => {
  try {
    const db = getDB(); // Fetch the database dynamically
    if (!db) return res.status(500).json({ error: "Database not initialized" });

    const usersCollection = db.collection("users");

    const { name, email, password } = req.body;

    const userExists = await usersCollection.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };

    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.login = async (req, res) => {
  try {
    const db = getDB(); // Fetch the database dynamically
    if (!db) return res.status(500).json({ error: "Database not initialized" });

    const usersCollection = db.collection("users");

    const { email, password } = req.body;

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, "SECRET_KEY", { expiresIn: "1h" });

    res.json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

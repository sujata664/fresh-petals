import express from "express";
import cors from "cors";
import db from "./Connection.js"; 
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// static images
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.get("/", (req, res) => {
  res.send("Fresh Petals Backend is Running");
});

// products
app.get("/products", (req, res) => {
  const sql = `
    SELECT p.id, p.name, p.price, p.quantity, p.image, c.name AS category
    FROM products p
    JOIN categories c ON p.category_id = c.id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err.message });
    res.json(result);
  });
});

// ✅ REGISTER API (FIXED)
app.post("/register", (req, res) => {
  console.log("BODY:", req.body); // 🔥 debug

  const { name, email, password, phone } = req.body;

  // validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO customers (name, email, password, phone, created_at)
    VALUES (?, ?, ?, ?, NOW())
  `;

  db.query(sql, [name, email, password, phone], (err, result) => {
    if (err) {
      console.log("SQL ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json({ message: "User registered successfully ✅" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
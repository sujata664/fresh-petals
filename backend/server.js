import express from "express";
import cors from "cors";
import db from "./Connection.js"; 
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));


app.get("/", (req, res) => {
  res.send("Fresh Petals Backend is Running ");
});


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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
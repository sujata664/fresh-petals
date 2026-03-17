import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Web@5009",
  database: "myapp",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

export default db; 
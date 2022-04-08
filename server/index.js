const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Mouradchniti@2001",
  database: "students-list",
});
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const grade = req.body.grade;
  db.query(
    "INSERT INTO students (name, age, gender, grade) VALUES(?,?,?,?)",
    [name, age, gender, grade],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values done");
      }
    }
  );
});
app.get("/students", (req, res) => {
  db.query("Select * from students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3000, () => {
  console.log("Yey u did it!");
});

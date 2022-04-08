import "./App.css";
import Axios from "axios";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState(0);
  const [student, setStudent] = useState([]);
  // const display = ()=>{
  // console.log(name,age,Gender,grade);
  // }
  const add = () => {
    Axios.post("http://localhost:3000/create", {
      name: name,
      age: age,
      gender: gender,
      grade: grade,
    }).then(() => {
      console.log("GG");
    });
  };
  const getStudents = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      setStudent(res.data);
    });
  };
  return (
    <div>
      <div className="info">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label>Choose Your Gender</label>
        <select
          name="Gender"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        >
          <option value="Other">Other</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <label>Grade</label>
        <input
          type="number"
          onChange={(event) => {
            setGrade(event.target.value);
          }}
        ></input>
        <button onClick={add}>Add Student</button>
      </div>
      <div className="show">
        <button onClick={getStudents}>Get Student</button>
        {student.map((value, index) =>{
          return (
            <div className="student">
              <h3>Name :{value.name}</h3>
              <h3> Age :{value.age}</h3>
              <h3> Gender :{value.gender}</h3>
              <h3> Grade :{value.grade}</h3>
            </div> 
          );
        })}
      </div>
    </div>
  );
}
export default App;

import React, { useState } from "react";
import "./Bootstrap/bootstrap.min.css";
import "./App.css";
// import Header from "./Components/Header/Header";
// import ServiceSection from "./Components/ServiceSection/ServiceSection";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  const displayInfo = () => {
    console.log(fName + lName + address, dob);
  };

  return (
    <>
      {/* <Header />
      <ServiceSection /> */}
      <label>First Name</label>
      <input
        type="text"
        onChange={(event) => {
          setFname(event.target.value);
        }}
      />
      <label>Last Name</label>
      <input
        type="text"
        onChange={(event) => {
          setLname(event.target.value);
        }}
      />
      <label>Address</label>
      <input
        type="text"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <label>DOB</label>
      <input
        type="date"
        onChange={(event) => {
          setDob(event.target.value);
        }}
      />

      <button onClick={displayInfo}>Register</button>
    </>
  );
}

export default App;

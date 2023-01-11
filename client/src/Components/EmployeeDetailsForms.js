import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";
<<<<<<< HEAD
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
=======


>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
function EmployeeDetailsForms() {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAddress, setEnteredAddress] = useState("");
  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

<<<<<<< HEAD
  const submitHandler = async (event) => {
=======
  const submitHandler =async (event) => {
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    event.preventDefault();
    const customerData = {
      empName: enteredName,
      dob: enteredDate,
      empAddress: enteredAddress,
    };
    console.log(customerData);
<<<<<<< HEAD
    try {
      const res = await axios.post(
        "http://localhost:8080/employee",
        customerData
      );
      if (res.data.errno) alert(res.data.sqlMessage);
    } catch (err) {
      console.log(err);
=======
    try{
    const res=  await axios.post("http://localhost:8080/employee",customerData)
    if(res.data.errno)
    alert (res.data.sqlMessage)
    }catch(err){
      console.log(err)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    }
    setEnteredName("");
    setEnteredDate("");
    setEnteredAddress("");
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Employee Details</header>
            <img src={image} alt=" logo" className="trin-img" />
          </div>

          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Date of Birth</label>
                <input
                  type="date"
                  onChange={dateChangeHandler}
                  value={enteredDate}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter employee address"
                  onChange={addressChangeHandler}
                  value={enteredAddress}
                  required
                ></input>
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
=======
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Employee Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={nameChangeHandler}
                value={enteredName}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Date of Birth</label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter employee address"
                onChange={addressChangeHandler}
                value={enteredAddress}
                required
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  );
}
export default EmployeeDetailsForms;

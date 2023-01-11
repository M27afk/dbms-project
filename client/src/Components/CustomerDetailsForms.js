import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";
import { useNavigate } from "react-router";
<<<<<<< HEAD
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
=======

>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
const options = ["Basic", "Premium"];

function CustomerDetailsForms() {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAddress, setEnteredTAddress] = useState("");
  const addressChangeHandler = (event) => {
    setEnteredTAddress(event.target.value);
  };
  // console.log(options[0])
  const [enteredSubscription, setEnterSubscription] = useState([options[0]]);
  console.log(enteredSubscription);
  // const SubscriptionChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setEnterSubscription(Number(event.target.value));

<<<<<<< HEAD
=======
  
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  // };
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const customerData = {
      custName: enteredName,
      subscribedOn: enteredDate,
      custAddress: enteredAddress,
      subscriptionType: enteredSubscription,
    };
    //console.log(customerData.subscribedOn);

    try {
<<<<<<< HEAD
      await axios.post("http://localhost:8080/customer", customerData);
      navigate("/customer");
=======
      const res=await axios.post("http://localhost:8080/customer", customerData);
      if(res.data.errno)
      alert (res.data.sqlMessage)
      navigate("/customer")
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    } catch (err) {
      console.log(err);
    }
    //console.log(customerData);
    setEnteredName("");
    setEnteredDate("");
    setEnteredTAddress("");
    setEnterSubscription("");
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Customer Details</header>
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
                <label>Subscribed On</label>
                <input
                  type="date"
                  onChange={dateChangeHandler}
                  value={enteredDate}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Subscription Type</label>
                <select
                  required
                  value={enteredSubscription}
                  onChange={(event) => setEnterSubscription(event.target.value)}
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="new-expense__control">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
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
          <header className="titles">Customer Details</header>
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
              <label>Subscribed On</label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Subscription Type</label>
              <select
                required
                value={enteredSubscription}
                onChange={(event) => setEnterSubscription(event.target.value)}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter your address"
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
export default CustomerDetailsForms;

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [previousLoan, setPreviousLoan] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [numberOfDependency, setNumberOfDependency] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      residenceType,
      monthlyIncome,
      previousLoan,
      maritalStatus,
      numberOfDependency,
      city,
      state,
    };

    try {
      await axios.post("http://localhost:5000/api/borrowers", formData);
      alert("Form submitted!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Borrower Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Residence Type</label>
          <input
            type="text"
            value={residenceType}
            onChange={(e) => setResidenceType(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Monthly Income</label>
          <input
            type="text"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Previous Loan</label>
          <select
            value={previousLoan}
            onChange={(e) => setPreviousLoan(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="input-group">
          <label>Marital Status</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div className="input-group">
          <label>Number Of Dependency</label>
          <input
            type="text"
            value={numberOfDependency}
            onChange={(e) => setNumberOfDependency(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// src/pages/HomePage.js
import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = ({ addCar }) => {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://arcane-depths-29961-afd49e5b07ec.herokuapp.com/api/cars", {
        model,
        year,
        manufacturer,
      })

      .then((res) => {
        // Notify the parent (App) to update the car list
        addCar(res.data);
        setModel("");
        setYear("");
        setManufacturer("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <h1>Add a New Car</h1>
        <input
          type="text"
          placeholder="Car Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;

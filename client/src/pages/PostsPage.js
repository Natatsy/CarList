// src/pages/PostsPage.js
import React, { useState } from "react";
import axios from "axios";
import "./PostsPage.css";

const PostsPage = ({ cars, setCars }) => {
  const [editCar, setEditCar] = useState(null);
  const [newModel, setNewModel] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newManufacturer, setNewManufacturer] = useState("");

  const handleDelete = (id) => {
    axios
      .delete(`https://arcane-depths-29961-afd49e5b07ec.herokuapp.com${id}`)
      .then(() => {
        setCars(cars.filter((car) => car._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    const carToEdit = cars.find((car) => car._id === id);
    setEditCar(carToEdit);
    setNewModel(carToEdit.model);
    setNewYear(carToEdit.year);
    setNewManufacturer(carToEdit.manufacturer);
  };

  const handleSave = (id) => {
    const updatedData = {
      model: newModel,
      year: newYear,
      manufacturer: newManufacturer,
    };
    axios
      .put(
        `https://arcane-depths-29961-afd49e5b07ec.herokuapp.com${id}`,
        updatedData
      )
      .then(() => {
        const updatedCars = cars.map((car) =>
          car._id === id ? { ...car, ...updatedData } : car
        );
        setCars(updatedCars);
        setEditCar(null); // Close the edit form
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="posts-page">
      <h1>Cars List</h1>
      {cars.map((car) => (
        <div key={car._id} className="post-card">
          <h3>
            {car.model} ({car.year})
          </h3>
          <p>{car.manufacturer}</p>
          <div className="buttons-container">
            <button
              className="delete-button"
              onClick={() => handleDelete(car._id)}
            >
              Delete
            </button>
            <button className="edit-button" onClick={() => handleEdit(car._id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
      {editCar && (
        <div className="edit-form">
          <h2>Edit Car</h2>
          <input
            type="text"
            value={newModel}
            onChange={(e) => setNewModel(e.target.value)}
          />
          <input
            type="number"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
          />
          <input
            type="text"
            value={newManufacturer}
            onChange={(e) => setNewManufacturer(e.target.value)}
          />
          <div className="buttons-container">
            <button
              className="save-button"
              onClick={() => handleSave(editCar._id)}
            >
              Save
            </button>
            <button className="cancel-button" onClick={() => setEditCar(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;

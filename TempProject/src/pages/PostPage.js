// src/pages/PostsPage.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";

const PostsPage = ({ cars, setCars }) => {
  const [editCar, setEditCar] = useState(null);
  const [newModel, setNewModel] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newManufacturer, setNewManufacturer] = useState("");

  const handleDelete = (id) => {
    axios
      .delete(
        `https://arcane-depths-29961-afd49e5b07ec.herokuapp.com/api/cars/${id}`
      )
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
        `https://arcane-depths-29961-afd49e5b07ec.herokuapp.com/api/cars/${id}`,
        updatedData
      )
      .then(() => {
        const updatedCars = cars.map((car) =>
          car._id === id ? { ...car, ...updatedData } : car
        );
        setCars(updatedCars);
        setEditCar(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Cars List</Text>
      <FlatList
        data={cars}
        keyExtractor={(car) => car._id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18 }}>
              {item.model} ({item.year})
            </Text>
            <Text>{item.manufacturer}</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{ marginRight: 10, padding: 10, backgroundColor: "red" }}
                onPress={() => handleDelete(item._id)}
              >
                <Text style={{ color: "white" }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 10, backgroundColor: "blue" }}
                onPress={() => handleEdit(item._id)}
              >
                <Text style={{ color: "white" }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {editCar && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Edit Car</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            placeholder="Car Model"
            value={newModel}
            onChangeText={setNewModel}
          />
          <TextInput
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            placeholder="Year"
            value={newYear}
            onChangeText={setNewYear}
          />
          <TextInput
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            placeholder="Manufacturer"
            value={newManufacturer}
            onChangeText={setNewManufacturer}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                marginRight: 10,
                padding: 10,
                backgroundColor: "green",
              }}
              onPress={() => handleSave(editCar._id)}
            >
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "gray",
              }}
              onPress={() => setEditCar(null)}
            >
              <Text style={{ color: "white" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default PostsPage;

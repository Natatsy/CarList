// src/pages/HomePage.js
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import axios from "axios";

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
        addCar(res.data);
        setModel("");
        setYear("");
        setManufacturer("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Add a New Car</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Car Model"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Year"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Manufacturer"
        value={manufacturer}
        onChangeText={setManufacturer}
      />
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "blue",
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

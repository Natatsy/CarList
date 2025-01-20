import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";
import axios from "axios";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/cars") // Ensure this points to port 5001
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage addCar={addCar} />} />
          <Route
            path="/posts"
            element={<PostsPage cars={cars} setCars={setCars} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

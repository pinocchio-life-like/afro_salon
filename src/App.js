import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import Home from "./Components/Home/Home";
import TheStudio from "./Components/TheStudio/TheStudio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theStudio" element={<TheStudio />} />
    </Routes>
  );
}

export default App;

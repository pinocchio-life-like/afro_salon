import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import Home from "./Components/Home/Home";
import TheStudio from "./Components/TheStudio/TheStudio";
import Services from "./Components/Services/Services";
import Book from "./Components/Book/Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theStudio" element={<TheStudio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/bookNow" element={<Book />} />
    </Routes>
  );
}

export default App;

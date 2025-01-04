import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Ensure this import is correct
import BookDetails from "./components/BookDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/books/:tokenId" element={<BookDetails />} />
        <Route path="/" element={<Home />} /> {/* Add element for the root route */}
      </Routes>
    </Router>
  );
};

export default App;
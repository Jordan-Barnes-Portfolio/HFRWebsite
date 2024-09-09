import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import AddReview from "./Pages/AddReview";
import Projects from "./Pages/Projects";
import RestorationResources from "./Pages/RestorationResources";
import Flood from "./Pages/Flood";
import { inject } from "@vercel/analytics";

function App() {
  inject();

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/createreview" element={<AddReview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/restoration-resources" element={<RestorationResources />} />
          <Route path="/flood" element={<Flood />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
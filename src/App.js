import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

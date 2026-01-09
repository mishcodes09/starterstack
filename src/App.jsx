import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Landing from "./pages/Landing";
// import Dashboard from "./pages/dashboard/Dashboard1";
import Marketplace from "./pages/marketplace/Marketplace";
import "./App.css";

// Create a simple NotFound component inline or import it if you have it
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-primary">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

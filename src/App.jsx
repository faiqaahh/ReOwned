import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Components/Product/Product";
import BuyNow from "./Components/BuyNow/BuyNow";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoute from "./Middleware/ProtectedRoute";
import HomePage from "./Pages/HomePage";
import UpdatePage from "./Pages/UpdatePage";
import DeletePage from "./Pages/DeletePage";
import RegisterPage from "./Pages/RegisterPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar"; // Import Navbar
import AboutPage from "./Pages/AboutPage"; // Import AboutPage
import EditProductPage from "./Pages/EditProductPage"; // Import EditProductPage

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update"
            element={
              <ProtectedRoute>
                <UpdatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/delete"
            element={
              <ProtectedRoute>
                <DeletePage />
              </ProtectedRoute>
            }
          />
          <Route path="/products" element={<Product />} />
          <Route path="/buy-now/:id" element={<BuyNow />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

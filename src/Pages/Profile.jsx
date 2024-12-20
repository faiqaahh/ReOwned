import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function profile() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container my-5 flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h1>About Us</h1>
          <p>Welcome to ReOwned! We are dedicated to providing the best products at the best prices.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profile;

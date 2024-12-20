import React from 'react';
import Product from '../Components/Product/Product';
import BuyNow from '../Components/BuyNow/BuyNow';
import Navbar from '../Components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Product /> {/* Add the Product component here */}
    </div> // Close the div element
  );
};

export default HomePage;
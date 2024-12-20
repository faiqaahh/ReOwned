import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import UpdateProfileForm from '../Components/UpdateProfileForm/UpdateProfileForm';
import Footer from '../Components/Footer/Footer';

function UpdatePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container my-5 flex-grow-1">
        <UpdateProfileForm />
      </div>
      <Footer />
    </div>
  );
}

export default UpdatePage;
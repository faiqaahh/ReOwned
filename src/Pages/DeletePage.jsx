import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import DeleteForm from '../Components/DeleteForm/DeleteForm';
import Footer from '../Components/Footer/Footer';

function DeletePage() {
  return (
    <div>
        <Navbar/>
        <DeleteForm/>
        <Footer/>
    </div>
  )
}

export default DeletePage
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={{ width: '100%', height: '300px', color: 'white', position: 'relative', bottom: '0' }} className='bg-black d-flex justify-content-center align-items-center flex-column mt-5'>
            <div className="footer d-flex justify-content-evenly align-items-center w-100 ">
                <div className="website" style={{ width: '400px' }}>
                    <h4>
                        <i className="fa-solid fa-beat fa-cart-shopping text-warning me-3"></i>
                        {' '} ReOwned
                    </h4>
                    <p>
                        ReOwned is a platform where you can buy and sell used products. We provide a wide range of products from electronics to furniture.
                    </p>
                </div>
            </div>
            <p>Copyright @2024 ReOwned</p>
        </div>
    );
}

export default Footer;
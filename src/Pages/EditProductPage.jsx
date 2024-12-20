import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ title: '', price: '', image: '' });

  useEffect(() => {
    // Fetch the product details using the id from local storage
    const fetchProduct = () => {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const productToEdit = products.find(p => p.id === parseInt(id));
      if (productToEdit) {
        setProduct(productToEdit);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the product details in local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.map(p => p.id === parseInt(id) ? product : p);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/home');
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditProductPage;

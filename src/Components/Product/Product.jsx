import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dummyData = [
          { id: 1, title: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
          { id: 2, title: "Product 2", price: 39.99, image: "https://via.placeholder.com/150" },
          { id: 3, title: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
          { id: 4, title: "Product 4", price: 49.99, image: "https://via.placeholder.com/150" },
          { id: 5, title: "Product 5", price: 59.99, image: "https://via.placeholder.com/150" },
          { id: 6, title: "Product 6", price: 69.99, image: "https://via.placeholder.com/150" },
          { id: 7, title: "Product 7", price: 79.99, image: "https://via.placeholder.com/150" },
          { id: 8, title: "Product 8", price: 89.99, image: "https://via.placeholder.com/150" },
          { id: 9, title: "Product 9", price: 99.99, image: "https://via.placeholder.com/150" },
          { id: 10, title: "Product 10", price: 109.99, image: "https://via.placeholder.com/150" },
          { id: 11, title: "Product 11", price: 119.99, image: "https://via.placeholder.com/150" },
          { id: 12, title: "Product 12", price: 129.99, image: "https://via.placeholder.com/150" },
          { id: 13, title: "Product 13", price: 139.99, image: "https://via.placeholder.com/150" },
          { id: 14, title: "Product 14", price: 149.99, image: "https://via.placeholder.com/150" },
          { id: 15, title: "Product 15", price: 159.99, image: "https://via.placeholder.com/150" },
          { id: 16, title: "Product 16", price: 169.99, image: "https://via.placeholder.com/150" },
          { id: 17, title: "Product 17", price: 179.99, image: "https://via.placeholder.com/150" },
          { id: 18, title: "Product 18", price: 189.99, image: "https://via.placeholder.com/150" },
          { id: 19, title: "Product 19", price: 199.99, image: "https://via.placeholder.com/150" },
          { id: 20, title: "Product 20", price: 209.99, image: "https://via.placeholder.com/150" }
        ];
        localStorage.setItem('products', JSON.stringify(dummyData));
        setProducts(dummyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      fetchProducts();
    }
  }, []);

  const handleEdit = (product) => {
    navigate(`/edit/${product.id}`);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="container mx-auto my-5">
      <Row className="mt-5 mb-3">
        <h5 style={{marginTop: "40px",textAlign: "start", fontSize: "30px", fontWeight: "bolder"}}>Welcome Back!!</h5>
        {products.map((product) => (
          <Col key={product.id} md={3} style={{ marginBottom: "25px" }}>
            <Card style={{ width: "17rem", height: "100%", marginTop: "30px" }} className="shadow">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bolder">{product.title}</Card.Title>
                <p>${product.price}</p>
                <center>
                  <Button style={{width: "100%"}} onClick={() => handleEdit(product)}>Edit</Button>
                  <Button style={{width: "100%", marginTop: "10px", backgroundColor: "red", color: "white"}} onClick={() => handleDelete(product.id)}>Delete</Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;

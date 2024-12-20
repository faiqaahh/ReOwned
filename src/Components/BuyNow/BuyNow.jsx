import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const dummyData = [
          {
            id: 1,
            title: "Product 1",
            price: 29.99,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            title: "Product 2",
            price: 39.99,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            title: "Product 3",
            price: 19.99,
            image: "https://via.placeholder.com/150"
          },
          {
            id: 4,
            title: "Product 4",
            price: 49.99,
            image: "https://via.placeholder.com/150"
          }
        ];
        const product = dummyData.find((p) => p.id === parseInt(id));
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCheckout = () => {
    localStorage.setItem("purchasedProduct", JSON.stringify(product));
    setConfirmation(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5">
      {confirmation ? (
        <div className="alert alert-success" role="alert">
          Purchase successful! Your product has been saved.
        </div>
      ) : (
        <Card style={{ width: "18rem", margin: "auto" }} className="shadow">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="fw-bolder">{product.title}</Card.Title>
            <p>${product.price}</p>
            <Button style={{width: "100%"}} onClick={handleCheckout}>Proceed to Checkout</Button>
          </Card.Body>
        </Card>
      )}
      <div className="footer-placeholder" style={{ height: "100px" }}></div>
    </div>
  );
}

export default BuyNow;

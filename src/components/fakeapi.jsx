import React, { useEffect, useState } from "react";
import "./ProductCard.css"; // Import the CSS for styling

 ProductCard=()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-card-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;

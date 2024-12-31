import React, { useEffect, useState } from "react";
import "./ReviewPage.css";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8888/cartItems"); 
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle quantity increment and decrement
  const updateQuantity = (id, increment) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(product.quantity - 1, 0), // Ensure quantity doesn't go below 0
            }
          : product
      )
    );
  };

  return (
    <div className="product-page">
      <h2>Product List</h2>
      {error && <p className="error">{error}</p>}
      {products.length === 0 ? (
        <p>No products available yet!</p>
      ) : (
        <div className="product-cards">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="card-header">
                <h3>{product.title}</h3>
                <p className="tagline">{product.tagline}</p>
              </div>
              <div className="card-body">
                <p>Quantity: {product.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(product._id, false)}>
                    -
                  </button>
                  <button onClick={() => updateQuantity(product._id, true)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;

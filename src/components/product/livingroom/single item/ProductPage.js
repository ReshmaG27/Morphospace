import React, { useState } from 'react';
import './ProductPage.css';  
import blackImage from '../../../../images/black.jpeg';
import blueImage from '../../../../images/blue.jpeg';
import redImage from '../../../../images/red.jpeg';
import greyImage from '../../../../images/grey.jpeg';

const SofaProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const colors = [
    { name: 'Black', image: blackImage },
    { name: 'Beige', image: blueImage },
    { name: 'Red', image: redImage },
    { name: 'Green', image: greyImage },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color.name);
  };

  const saveDetails = async () => {
    const title = document.querySelector("h1").innerText;
    const price = document.querySelector(".left-section p:nth-child(2)").innerText;

    const data = {
      title,
      tagline: price, // Saving price as tagline
    };

    try {
      const response = await fetch("http://localhost:8888/saveDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Saved too Cart successfully!");
      } else {
        alert("Failed to save details");
      }
    } catch (error) {
      alert("Error:", error);
    }
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>3-seat sofa</h1>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Rs. 28,999</p>
        <p>
          <span style={{ color: '#f39c12', fontSize: '16px' }}>★★★★☆</span> (129)
        </p>
        <p>
          Add comfort and style to your home. Enjoy a compact sofa that’s both
          cozy and elegant.
        </p>

        <div className="color-options-container">
          <p>Available colors:</p>
          <div className="color-options">
            {colors.map((color) => (
              <img
                key={color.name}
                src={color.image}
                alt={color.name}
                onClick={() => handleColorChange(color)}
                className={selectedColor === color.name ? 'selected' : ''}
              />
            ))}
          </div>
        </div>

        <div className="button-container">
          <button className="add-to-cart" onClick={saveDetails}>Add to cart</button>
          <button className="check-room-layout">Check in room layout</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src={colors.find((color) => color.name === selectedColor)?.image}
          alt={selectedColor}
        />
      </div>
    </div>
  );
};

export default SofaProductPage;

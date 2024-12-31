import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { WishlistContext } from '../header/WishListContext'; // Import WishlistContext
import { CartContext } from '../cart/CartContext'; // Import CartContext
import { products } from '../../products'; // Assuming your products data is coming from here
import ReviewForm from './ReviewForm'; // Import ReviewForm as default export

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const { wishlist, addToWishlist } = useContext(WishlistContext); // Access wishlist and addToWishlist
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  const [selectedImage, setSelectedImage] = useState(product?.image); // Default image
  const [isWishlistAdded, setIsWishlistAdded] = useState(wishlist.some(item => item.id === product.id)); // Check if the product is already in the wishlist
  const navigate = useNavigate(); // Initialize useNavigate

  if (!product) {
    return <p>Product not found!</p>; // Display a message if the product is not found
  }

  const handleImageChange = (image) => {
    setSelectedImage(image); // Update the displayed image based on selection
  };

  const handleToggleWishlist = () => {
    if (!isWishlistAdded) {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: selectedImage, // Add the selected image to the wishlist
      });
    } else {
      // If already in the wishlist, you may add functionality to remove it from the wishlist here
    }
    setIsWishlistAdded(!isWishlistAdded); // Toggle wishlist state
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: selectedImage,
    });
    alert(`${product.name} has been added to your cart!`);
    navigate('/cart'); // Navigate to CartPage
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', flex: '1' }}>
        {/* Product Details */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 50%' }}>
            <h1 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: '600' }}>{product.name}</h1>
            <p style={{ fontSize: '18px', color: '#333', marginBottom: '15px' }}>{product.description}</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Price: Rs.{product.price}</p>

            {/* Select Design */}
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Available Colours:</p>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
              {product.colors && product.colors.length > 0 ? (
                product.colors.map((color) => (
                  <img
                    key={color.image}
                    src={color.image}
                    alt={`${product.name} - ${color.name}`}
                    onClick={() => handleImageChange(color.image)}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: selectedImage === color.image ? '3px solid black' : '1px solid #ddd',
                      cursor: 'pointer',
                    }}
                  />
                ))
              ) : (
                <p style={{ fontSize: '14px', color: '#777' }}>No designs available</p>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {/* Heart Icon for Wishlist */}
              <span
                onClick={handleToggleWishlist}
                style={{
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: isWishlistAdded ? '#e63946' : '#bbb', // Red when added, grey when not
                }}
              >
                {isWishlistAdded ? '❤️' : '🤍'}
              </span>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart} // Use the new handler
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div style={{ flexShrink: 0, width: '100%', maxWidth: '400px' }}>
            <img
              src={selectedImage}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>

        {/* Review Form */}
        <ReviewForm />
      </div>
    </div>
  );
};

export default ProductDetail;

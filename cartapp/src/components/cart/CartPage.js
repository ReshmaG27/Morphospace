import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CartPage = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Increment item quantity in the cart
  const incrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement item quantity in the cart
  const decrementQuantity = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is zero
    );
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: '900px', margin: '50px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 100px 50px 100px 100px',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #ccc',
                padding: '16px',
                margin: '10px 0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
              {/* Title and Price */}
              <div>
                <h3 style={{ margin: '0 0 10px' }}>{item.name}</h3>
                <p style={{ margin: 0 }}>Price: Rs. {item.price}</p>
              </div>
              {/* Increment/Decrement */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <button
                  onClick={() => decrementQuantity(item.id)}
                  style={{
                    padding: '5px 10px',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  style={{
                    padding: '5px 10px',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  +
                </button>
              </div>
              {/* Quantity */}
              <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {item.quantity}
              </div>
              {/* Total Price */}
              <div style={{ textAlign: 'center' }}>
                Rs. {(item.price * item.quantity).toFixed(2)}
              </div>
              {/* Delete Button */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    color: 'white',
                    backgroundColor: 'red',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <h2 style={{ textAlign: 'right', marginTop: '20px' }}>
            Total: Rs.{totalPrice.toFixed(2)}
          </h2>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/address')} // Navigate to PaymentPage
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
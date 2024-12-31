import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Check if localStorage is available and load initial cart state from it
    if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Function to update the quantity of a product
  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) } // Prevent quantity from going below 1
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

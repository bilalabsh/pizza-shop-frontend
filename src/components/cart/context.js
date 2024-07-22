// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter(item => item.name !== itemName));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

// CartContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const cartSaved = localStorage.getItem('cart');
    return cartSaved ? JSON.parse(cartSaved) : [];
  });


  // Función para verificar y recuperar el carrito del almacenamiento local al iniciar la aplicación
  const checkAndRestoreCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  };

  useEffect(() => {
    checkAndRestoreCartFromLocalStorage();
  }, []);

  // Recuperar el carrito del almacenamiento local al cargar la página
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar el carrito en el almacenamiento local cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].cantidad = product.cantidad;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCartItems([...cartItems, product]);
    }
    
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    // Calcular el total sumando los precios de todos los productos en el carrito
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal, checkAndRestoreCartFromLocalStorage }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



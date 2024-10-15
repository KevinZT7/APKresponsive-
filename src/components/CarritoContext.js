// src/components/CarritoContext.js
import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCarrito = (item) => {
    setCarrito((prevCarrito) => [...prevCarrito, item]);
  };

  const removeFromCarrito = (item) => {
    setCarrito((prevCarrito) => prevCarrito.filter((i) => i.id !== item.id));
  };

  const clearCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito, clearCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};









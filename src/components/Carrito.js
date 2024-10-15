import React from 'react';
import { useCarrito } from './CarritoContext';
import { useNavigate } from 'react-router-dom'; 
import './styles/Carrito.css';

const Carrito = () => {
  const { carrito, removeFromCarrito } = useCarrito(); 
  const navigate = useNavigate(); 

  const handleRemove = (item) => {
    removeFromCarrito(item);
  };

  const handleCheckout = () => {
    
    navigate('/pedido'); 
  };

  return (
    <div className="carrito-container">
      <h2>Tu Carrito</h2>
      <div className="carrito-items">
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.image} alt={item.name} />
              <div className="carrito-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => handleRemove(item)}>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="carrito-buttons">
        <button onClick={handleCheckout} className="checkout-button">
          Hacer Pedido
        </button>
        <button onClick={() => window.history.back()} className="back-button">
          Regresar al Menú
        </button>
      </div>
    </div>
  );
};

export default Carrito;







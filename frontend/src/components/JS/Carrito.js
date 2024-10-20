import React, { useEffect, useState } from 'react';
import { useCarrito } from './CarritoContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/Carrito.css';



const Carrito = () => {
  const { carrito, removeFromCarrito, clearCarrito } = useCarrito();  
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  
  const handleRemove = (item) => {
    
    removeFromCarrito(item);  
    
  };

  
  const handleCheckout = () => {
    
    navigate('/pedido');  
  };

  
  useEffect(() => {
    const carritoTotal = carrito.reduce((acc, item) => acc + item.price, 0);
    setTotal(carritoTotal);
  }, [carrito]);

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
                <p>${item.price}</p>
                <button onClick={() => handleRemove(item)} className="remove-button">
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {carrito.length > 0 && (
        <div className="carrito-total">
          <h3>Total: ${total}</h3>
        </div>
      )}

      <div className="carrito-buttons">
        <button onClick={handleCheckout} className="checkout-button">
          Hacer Pedido
        </button>
        <button onClick={() => navigate('/menu')} className="back-button">
          Regresar al Menú
        </button>
      </div>
    </div>
  );
};

export default Carrito;







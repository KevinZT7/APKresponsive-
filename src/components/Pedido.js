

import React, { useState } from 'react';
import { useCarrito } from './CarritoContext';
import './styles/Pedido.css';

const Pedido = () => {
  const { carrito, clearCarrito } = useCarrito();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  
  const validateForm = () => {
    if (!nombre || !apellido) {
      alert("El nombre y el apellido son obligatorios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
    if (!direccion) {
      alert("La dirección es obligatoria.");
      return false;
    }
    if (!metodoPago) {
      alert("Por favor, seleccione un método de pago.");
      return false;
    }
    return true;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      
      alert('¡Gracias por tu pedido!');
      clearCarrito(); 

      
      window.location.href = '/gracias';
    }
  };

  return (
    <div className="pedido-container">
      <h2>Realizar Pedido</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en tu pedido.</p>
      ) : (
        <>
          <h3>Productos en tu pedido:</h3>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <p>Precio: {item.price}</p>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nombre" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Apellido" 
              value={apellido} 
              onChange={(e) => setApellido(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Dirección" 
              value={direccion} 
              onChange={(e) => setDireccion(e.target.value)} 
              required 
            />
            <select 
              value={metodoPago} 
              onChange={(e) => setMetodoPago(e.target.value)} 
              required
            >
              <option value="">Seleccionar método de pago</option>
              <option value="nequi">Nequi</option>
              <option value="bancolombia">Bancolombia</option>
              <option value="efectivo">Efectivo</option>
            </select>
            <button type="submit">Pagar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Pedido;



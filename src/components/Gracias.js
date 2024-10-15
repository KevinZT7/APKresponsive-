import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Gracias.css'; 

const Gracias = () => {
  return (
    <div className="gracias-container">
      <Link to="/menu" className="regresar-button">Regresar al Menú</Link>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" /> {/* Ajusta la ruta del logo */}
        <h2 className="mensaje-gracias">Gracias por elegirnos, su pedido estará en breve.</h2>
      </div>
    </div>
  );
};

export default Gracias;

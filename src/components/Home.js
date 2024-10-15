import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Contenedor de los botones de navegación */}
      <div className="navbar">
        <Link to="/menu" className="nav-btn">Menú</Link>
        <Link to="/carrito" className="nav-btn">Carrito</Link>
        <Link to="/pedido" className="nav-btn">Pedido</Link>
      </div>

      {/* Mensaje de bienvenida */}
      <h1 className="welcome-message">¡Bienvenido a Nuestra Pizzería!</h1>

      {/* Imagen grande de la empresa */}
      <img src="/logo.png" alt="Logo de la empresa" className="logo-img" />
    </div>
  );
}

export default Home;



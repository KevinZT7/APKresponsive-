import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/JS/Home';
import Menu from './components/JS/Menu';
import Carrito from './components/JS/Carrito';
import Pedido from './components/JS/Pedido';
import Gracias from './components/JS/Gracias';
import NotFound from './components/JS/NotFound'; 
import { CarritoProvider } from './components/JS/CarritoContext';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="*" element={<NotFound />} /> {/* Manejo de rutas no encontradas */}
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;








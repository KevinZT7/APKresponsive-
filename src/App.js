import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Carrito from './components/Carrito';
import Pedido from './components/Pedido';
import Gracias from './components/Gracias';
import NotFound from './components/NotFound'; 
import { CarritoProvider } from './components/CarritoContext';

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







const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const pizzaRoutes = require('./routes/pizza'); 
const carritoRoutes = require('./routes/carrito'); 
const pedidosRoutes = require('./routes/pedidos'); 

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/servicioweb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado a MongoDB');

    // Rutas
    app.use('/api/auth', authRoutes); 
    app.use('/api/pizzas', pizzaRoutes); 
    app.use('/api/carrito', carritoRoutes); 
    app.use('/api/pedidos', pedidosRoutes); 

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('No se pudo conectar a MongoDB', err);
    process.exit(1); // Termina el proceso en caso de error
});




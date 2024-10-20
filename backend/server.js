const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar las rutas desde la carpeta 'backend/routes'
const authRoutes = require('./routes/auth');
const pizzaRoutes = require('./routes/pizza');
const carritoRoutes = require('./routes/carrito');
const pedidosRoutes = require('./routes/pedidos');

const app = express();

// Middleware para manejar JSON y CORS
app.use(express.json());

// Configuración de CORS para permitir solicitudes desde tu frontend (puerto 3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Cambia a la URL correcta si es diferente
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Ruta raíz ("/") para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor corriendo en http://localhost:5002');
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/servicioweb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado a MongoDB');

  // Rutas de la API
  app.use('/api/auth', authRoutes);
  app.use('/api/pizzas', pizzaRoutes);
  app.use('/api/carrito', carritoRoutes);
  app.use('/api/pedidos', pedidosRoutes);

  // Puerto donde corre el servidor
  const PORT = process.env.PORT || 5002;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('No se pudo conectar a MongoDB', err);
  process.exit(1);  // Detenemos el servidor si hay error en la conexión a MongoDB
});





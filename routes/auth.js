const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Para cifrar contraseñas
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticación

// Ruta para registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Cifrar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});

// Ruta para login de usuario
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Crear token JWT
        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });

        res.json({ token, message: 'Login exitoso' });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

// Ruta protegida para acceder a un recurso
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Hola ${req.user.id}, bienvenido al recurso protegido.` });
});

// Ruta para actualizar perfil de usuario
router.put('/update', authMiddleware, async (req, res) => {
    const { newUsername, newEmail } = req.body;

    try {
        // Buscar el usuario autenticado
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar los datos del usuario
        if (newUsername) user.username = newUsername;
        if (newEmail) user.email = newEmail;

        // Guardar los cambios en la base de datos
        await user.save();

        res.json({ message: 'Perfil actualizado exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil', error });
    }
});

// Ruta para eliminar usuario
router.delete('/delete', authMiddleware, async (req, res) => {
    try {
        // Buscar el usuario autenticado
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Eliminar el usuario
        await user.remove();

        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
});

module.exports = router;


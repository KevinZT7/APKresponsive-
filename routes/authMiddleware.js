const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // Obtener el token de los headers de la solicitud
    const token = req.header('Authorization');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;  // Añadir el usuario al request
        next();  // Continuar con la ejecución de la ruta
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
}

module.exports = authMiddleware;

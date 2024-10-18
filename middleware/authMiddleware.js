const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // Obtener el token de los headers de la solicitud
    const authHeader = req.header('Authorization');
    
    // Verificar si no hay token o si no tiene el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No se proporcionó un token válido');  // Para depurar
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token válido' });
    }

    try {
        // Extraer el token eliminando el prefijo 'Bearer '
        const token = authHeader.split(' ')[1];
        console.log('Token recibido:', token);  // Para depurar

        // Verificar el token
        const decoded = jwt.verify(token, 'secretKey');  // Asegúrate de que sea la clave correcta
        console.log('Token decodificado:', decoded);  // Para depurar

        req.user = decoded;  // Añadir el usuario al request
        next();  // Continuar con la ejecución de la ruta
    } catch (error) {
        console.log('Token inválido:', error);  // Para depurar
        return res.status(400).json({ message: 'Token inválido' });
    }
}

module.exports = authMiddleware;






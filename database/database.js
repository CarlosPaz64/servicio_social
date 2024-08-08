const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 100, // Número máximo de conexiones en el pool
    queueLimit: 0 // Número máximo de solicitudes de conexión en espera (0 para ilimitado)
});

// Exportar el pool para usarlo en otras partes de la aplicación
module.exports = pool;

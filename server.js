require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware para parsear JSON y datos URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Rutas de los HTML
// Ruta para el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rutas para otros archivos HTML
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

// Usar rutas de la API
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
});

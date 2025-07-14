const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3000;

// Middleware para recibir JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas de la API
app.use('/api', apiRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
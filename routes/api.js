const express = require('express');
const router = express.Router();

// Ruta GET
router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'GET recibido' });
});

// Ruta POST
router.post('/mensaje', (req, res) => {
  res.json({ mensaje: 'POST recibido', datos: req.body });
});

// Ruta PUT
router.put('/mensaje', (req, res) => {
  res.json({ mensaje: 'PUT recibido', datos: req.body });
});

// Ruta DELETE
router.delete('/mensaje', (req, res) => {
  res.json({ mensaje: 'DELETE recibido' });
});

module.exports = router;
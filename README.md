# Reto 5 - Servidor Web con Node.js y Express

Este proyecto forma parte del Nivel 4 del curso de programación de FUNDAE. El objetivo es crear un servidor web básico utilizando Node.js y Express que sea capaz de:

- Responder a solicitudes HTTP: GET, POST, PUT, DELETE
- Servir contenido estático como una página HTML
- Tener una estructura de código organizada y mantenible

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js

## 📁 Estructura del proyecto
nivel4-backend-servidor-node/
├── public/              # Contiene el archivo HTML estático
│   └── index.html
├── routes/              # Contiene las rutas de la API
│   └── api.js
├── server.js            # Archivo principal que inicia el servidor
├── package.json         # Información del proyecto y dependencias
├── .gitignore           # Archivos y carpetas excluidos del repositorio
└── README.md            # Documentación del proyecto

## 🔌 Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/veronicasofiabatistaqa/veronicasofiabatista.git
2.	Entrar a la carpeta del proyecto:
   cd nivel4-backend-servidor-node
3.	Instalar dependencias:
   npm install
4.	Iniciar el servidor:
   node server.js
5.	Abrir en navegador:
   👉 http://localhost:3000 (verás tu HTML)
   👉 http://localhost:3000/api/mensaje (verás respuesta JSON del GET)

📬 Rutas disponibles
	•	GET /api/mensaje
	•	POST /api/mensaje (con JSON en el body)
	•	PUT /api/mensaje (con JSON en el body)
	•	DELETE /api/mensaje

✅ Estado

Proyecto completado y funcional, cumpliendo con todos los requisitos del reto 5 de FUNDAE.

✍️ Desarrollado por Verónica Sofía Batista
  

   

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/v1/chat', async (req, res) => {
  const { mensaje, tipo } = req.body;

  try {
    if (tipo === 'imagen') {
      // Generar imagen basada en el mensaje del usuario
      const prompt = `Crea una imagen profesional y atractiva relacionada con: ${mensaje}. La imagen debe ser para un servicio de tatuajes y eventos.`;
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ]
          })
        }
      );
      const data = await response.json();
      return res.json(data);
    } else {
      // Generar respuesta de texto sobre costos, eventos y pagos
      const prompt = `Eres un asistente de atención al cliente para DaSt, una página de tatuajes y eventos. 
      Proporciona respuestas profesionales y amables sobre costos de tatuajes, eventos próximos, formas de pago y servicios.
      Usuario pregunta: ${mensaje}
      
      Responde de manera clara, concisa y útil.`;
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ]
          })
        }
      );
      const data = await response.json();
      console.log('Respuesta Gemini:', data);
      return res.json(data);
    }
  } catch (error) {
    console.error('Error Gemini:', error);
    res.status(500).json({ error: 'Error conectando con Gemini' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
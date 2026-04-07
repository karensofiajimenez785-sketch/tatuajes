# Chat con IA - Presupuestos e Imágenes

Este proyecto implementa un chat con IA que puede generar respuestas de presupuesto e imágenes usando OpenAI, todo en JavaScript.

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

2. Configura tu API key de OpenAI en el archivo `.env`:
   ```
   OPENAI_API_KEY=tu_clave_aqui
   ```

## Uso

1. Inicia el servidor:
   ```
   npm start
   ```

2. Abre `agroai/chat.html` en tu navegador.

3. Envía mensajes:
   - Chat normal: "Hola"
   - Presupuesto: "/presupuesto necesito presupuesto para una casa"
   - Imagen: "/imagen genera imagen de una casa moderna"

## Estructura

- `server.js`: Servidor Express que maneja las llamadas a OpenAI.
- `agroai/chat.html`: Interfaz del chat con JavaScript para interactuar.
- `.env`: Archivo para la API key (no subir a git).
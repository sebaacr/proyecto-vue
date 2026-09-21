# Actividad 9: Primer Backend con Express.js - TechSoluciones IT

- **Estudiante:** Sebastián Contreras
- **Empresa:** TechSoluciones IT (Servicios Tecnológicos y Soporte Informático)

## Parte 1 y 2 – Preparación del backend

- **Comandos utilizados:** Se creó la carpeta `backend` con `mkdir backend`, se inicializó el proyecto con `npm init -y` para generar el `package.json` y se instaló el framework web mediante `npm install express`.
- **Propósito:** `package.json` gestiona las dependencias y configuración de Node.js, mientras que `express` facilita la creación del servidor web y el manejo de rutas/endpoints.

## Parte 3 y 4 – Primer servidor

- **Configuración:** Se creó el archivo `server.js` configurando un servidor HTTP en el puerto 3000.
- **Explicación de componentes:**
  - `app.get()`: Define la ruta HTTP (en este caso `/`) y la función que responderá a la solicitud.
  - `req` (request): Objeto que contiene la información enviada por el cliente.
  - `res` (response): Objeto que gestiona la respuesta enviada desde el servidor.
  - `app.listen()`: Inicia el servidor para que empiece a escuchar peticiones en el puerto especificado.

## Parte 5 – Datos de servicios

- **Estructura del archivo:** Se creó `backend/data/servicios.js` exportando un arreglo de objetos mediante `module.exports`.
- **Atributos de los datos:** Cada servicio cuenta con `id`, `nombre`, `categoria`, `descripcion`, `precio` y estado de disponibilidad (`disponible`).
- **Adaptación corporativa:** Se incorporaron 8 servicios enfocados al rubro de IT (Soporte, Infraestructura, Nube, Ciberseguridad, Consultoría y Desarrollo).

## Parte 6 – API de servicios

- **Nueva ruta creada:** `GET /api/servicios` para retornar el arreglo con los datos importados desde `./data/servicios`.
- **Diferencia entre `res.send()` y `res.json()`:** `res.send()` envía respuestas HTTP generales (texto plano, HTML, buffer), mientras que `res.json()` convierte automáticamente objetos y arreglos de JavaScript a cadenas con formato JSON ajustando la cabecera `Content-Type: application/json`.
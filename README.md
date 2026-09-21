# Actividad 9: Primer Backend con Express.js - TechSoluciones IT

- **Estudiante:** Sebastián Contreras
- **Empresa:** TechSoluciones IT (Servicios Tecnológicos y Soporte Informático)

## Parte 1 y 2 – Preparación del backend

- **Comandos utilizados:** Se crearon la carpeta `backend` con `mkdir backend`, se inicializó el proyecto con `npm init -y` para generar el `package.json` y se instaló el framework web mediante `npm install express`.
- **Propósito:** `package.json` gestiona las dependencias y configuración de Node.js, mientras que `express` facilita la creación del servidor web y el manejo de rutas/endpoints.

## Parte 5 – Datos de servicios

- **Estructura del archivo:** Se creó `backend/data/servicios.js` exportando un arreglo de objetos mediante `module.exports`.
- **Atributos de los datos:** Cada servicio cuenta con `id`, `nombre`, `categoria`, `descripcion`, `precio` y estado de disponibilidad (`disponible`).
- **Adaptación corporativa:** Se incorporaron 8 servicios enfocados al rubro de IT (Soporte, Infraestructura, Nube, Ciberseguridad, Consultoría y Desarrollo).
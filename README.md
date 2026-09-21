# Actividad 8: Prototipo Web - TechSoluciones IT

## Parte 1 – Reutilización del proyecto

- **Empresa:** TechSoluciones IT (Servicios Tecnológicos y Soporte Informático).
- **Elementos conservados:** Se mantuvo la estructura base de componentes de Vue 3 con Vite, la integración de estado global (Pinia/reactive store) y los estilos base.
- **Elementos modificados:** Se eliminó la lógica de gestión de libros/recepciones escolares de la Actividad 7 y se adaptó para gestionar un catálogo dinámico de servicios tecnológicos y solicitudes de contacto.

## Parte 2 – Navegación y vistas

Se configuró Vue Router para convertir la aplicación en una Single Page Application (SPA).
- **Vistas implementadas:** `Inicio`, `Nosotros`, `Servicios` y `Contacto`.
- **Navegación:** Se utilizó `<router-link>` para permitir la transición fluida entre vistas sin recargar la página y `<router-view>` para renderizar los componentes dinámicamente.


## Parte 3 – Catálogo de servicios y componentes

- **Organización de datos:** Se definió una colección de 6 servicios en `src/data/servicios.js` con nombre, categoría, descripción, precio y disponibilidad.
- **Componente reutilizable:** Se creó el componente `TarjetaServicio.vue` para presentar visualmente cada oferta de manera consistente.
- **Paso de Props:** La vista `ServiciosView.vue` recorre los elementos con `v-for` y los envía a `TarjetaServicio.vue` a través de props.
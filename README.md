# Actividad 7: Recepción de Textos Escolares

## Diagnóstico inicial

1. **Problema detectado:** Clase activa mal comparada en el botón de Recepciones.
   - **Archivo:** `src/App.vue`
   - **Posible causa:** El valor en `:class="{active:tab==='recepcióne'}"` tiene un error tipográfico ('recepcióne' en lugar de 'recepciones').

2. **Problema detectado:** Nombre de componente mal escrito en la plantilla.
   - **Archivo:** `src/App.vue`
   - **Posible causa:** La etiqueta `<Libross />` tiene una 's' de más, por lo que Vue no reconoce el componente `<Libros />`.

3. **Problema detectado:** La función del store no retorna el estado compartido.
   - **Archivo:** `src/stores/useRecepcionStore.js`
   - **Posible causa:** La función `useRecepcionStore()` retorna un objeto vacío `{ /* state */ }` en lugar de retornar la variable `state`.

4. **Problema detectado:** Inconsistencia de nombres y tipos de datos en los ítems iniciales.
   - **Archivo:** `src/stores/useRecepcionStore.js`
   - **Posible causa:** La propiedad `id_reception` usa inglés en lugar del estándar en español `id_recepcion`, y la `cantidad` está como texto (`'450'`) en vez de número (`450`).

5. **Problema detectado:** Falta de reactividad y binding correcto en formularios y componentes de la aplicación.
   - **Archivo:** `src/components/Libros.vue` / `src/components/Recepciones.vue`
   - **Posible causa:** Errores en la vinculación de props, validaciones de campos (como ISBN) y manejo del estado global.

## Estado compartido

- **Problema encontrado:** La función `useRecepcionStore()` no devolvía el objeto `state`, por lo que ningún componente podía acceder a los datos compartidos. Además, había diferencias en los nombres de las llaves (`id_reception` vs `id_recepcion`) y la cantidad estaba guardada como texto.
- **Corrección realizada:** Se actualizó `return state` en la función exportada y se normalizó la propiedad `id_recepcion` e `cantidad` como tipo numérico.
- **Por qué debe compartirse:** El estado debe ser compartido para que las recepciones, libros, proveedores e ítems estén centralizados y accesibles desde cualquier componente de la aplicación de forma reactiva.


## Gestión de libros

- **Problemas encontrados:**
  - La desestructuración `const { state } = useRecepcionStore()` resultaba en `undefined` porque el store devuelve la reactividad directamente.
  - La condición para validar ISBN usaba la lógica `length < 10 && length < 13` que permitía ingresar valores no válidos.
  - Inconsistencia entre la clave `anio_publicacion` del formulario y la propiedad `anio` usada en las colecciones del store.
- **Correcciones realizadas:**
  - Se asignó la referencia directa mediante `const store = useRecepcionStore()`.
  - Se implementó la validación estricta para asegurar que la longitud del ISBN sea exactamente de 10 o 13 caracteres.
  - Se unificó la propiedad del objeto como `anio` tanto en la reactividad del formulario como al insertar en `store.libros`.
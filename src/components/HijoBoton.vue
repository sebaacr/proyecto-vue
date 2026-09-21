<template>
  <button @click="$emit('saludo')">Enviar saludo</button>
</template>

<script>
export default {
  name: 'HijoBoton'
}
</script>
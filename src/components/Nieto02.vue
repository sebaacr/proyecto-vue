<template>
  <div>
    <h4>Componente Nieto 02</h4>
    <button @click="enviarMensaje">Enviar mensaje al Padre principal</button>
  </div>
</template>

<script>
export default {
  methods: {
    enviarMensaje() {
      this.$emit('mensaje-nieto02', 'Saludos desde el Nieto 02.');
    }
  }
}
</script>
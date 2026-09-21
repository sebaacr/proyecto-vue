<template>
  <div>
    <h4>Componente Nieto 01</h4>
    <button @click="enviarMensaje">Enviar mensaje al Padre principal</button>
  </div>
</template>

<script>
export default {
  methods: {
    enviarMensaje() {
      this.$emit('mensaje-nieto01', 'Saludos desde el Nieto 01.');
    }
  }
}
</script>
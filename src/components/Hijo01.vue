<template>
  <div>
    <h3>Componente Hijo 01</h3>
    <p>Mensaje recibido: {{ mensaje }}</p>
    
    <button @click="enviarMensaje">Enviar mensaje del Hijo 01</button>

    <Nieto01 @mensaje-nieto01="pasarMensajeNieto01" />
  </div>
</template>

<script>
import Nieto01 from './Nieto01.vue'

export default {
  components: { Nieto01 },
  props: ['mensaje'],
  methods: {
    enviarMensaje() {
      this.$emit('mensaje-hijo01', 'Hola Padre, soy el Hijo 01.');
    },
    pasarMensajeNieto01(texto) {
      this.$emit('mensaje-nieto01', texto);
    }
  }
}
</script>
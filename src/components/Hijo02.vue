<template>
  <div>
    <h3>Componente Hijo 02</h3>
    <p>Mensaje recibido: {{ mensaje }}</p>
    
    <button @click="enviarMensaje">Enviar mensaje del Hijo 02</button>

    <Nieto02 @mensaje-nieto02="pasarMensajeNieto02" />
  </div>
</template>

<script>
import Nieto02 from './Nieto02.vue'

export default {
  components: { Nieto02 },
  props: ['mensaje'],
  methods: {
    enviarMensaje() {
      this.$emit('mensaje-hijo02', 'Hola Padre, soy el Hijo 02.');
    },
    pasarMensajeNieto02(texto) {
      this.$emit('mensaje-nieto02', texto);
    }
  }
}
</script>
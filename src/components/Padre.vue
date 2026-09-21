<template>
  <div>
    <HijoBoton @saludo="mostrarSaludo" />
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import HijoBoton from './HijoBoton.vue'

export default {
  components: { HijoBoton },
  data() {
    return { mensaje: '' }
  },
  methods: {
    mostrarSaludo() {
      this.mensaje = 'Hola desde el hijo';
    }
  }
}
</script>
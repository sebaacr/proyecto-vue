<template>
  <div>
    <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea" />
    <button @click="agregarTarea">Agregar</button>
    <button @click="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} tareas
    </button>
    <ul v-show="mostrar">
      <li v-for="(t, index) in tareas" :key="index">{{ t }}</li>
    </ul>
    <p v-if="tareas.length === 0">No hay tareas registradas</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaTarea: '',
      tareas: [],
      mostrar: true
    }
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim()) {
        this.tareas.push(this.nuevaTarea);
        this.nuevaTarea = '';
      }
    }
  }
}
</script>
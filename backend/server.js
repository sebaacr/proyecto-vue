const express = require('express')
const servicios = require('./data/servicios')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Servidor de empresa funcionando correctamente')
})

// Ruta GET para obtener el catálogo completo o filtrado por categoría
app.get('/api/servicios', (req, res) => {
  const { categoria } = req.query

  if (categoria) {
    const serviciosFiltrados = servicios.filter(
      item => item.categoria.toLowerCase() === categoria.toLowerCase()
    )
    return res.json(serviciosFiltrados)
  }

  res.json(servicios)
})

// Ruta GET para buscar un servicio por ID
app.get('/api/servicios/:id', (req, res) => {
  const id = Number(req.params.id)
  const servicio = servicios.find(item => item.id === id)

  if (!servicio) {
    return res.status(404).json({
      mensaje: 'Servicio no encontrado'
    })
  }

  res.json(servicio)
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})
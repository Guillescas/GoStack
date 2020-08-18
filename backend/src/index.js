const express = require('express')

const app = express()

app.use(express.json())

app.get('/projects', (req, res) => {
  const { title, owner } = req.query

  console.log(title)

  return res.status(200).json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body

  console.log(title)
  console.log(owner)

  return res.status(200).json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ])
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params

  console.log(id)

  return res.status(200).json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ])
})

app.delete('/projects/:id', (req, res) => {
  return res.status(200).json([
    'Projeto 2',
    'Projeto 3'
  ])
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!')
})
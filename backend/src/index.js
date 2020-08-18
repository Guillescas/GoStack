const express = require('express')

const app = express()

app.get('/projects', (req, res) => {
  return res.status(200).send('Hello World!')
})

app.listen(3333)
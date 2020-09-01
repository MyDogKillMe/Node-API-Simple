const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World! from get route')
})

app.post('/', function (req, res) {
  res.send('Hello World! from post route')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
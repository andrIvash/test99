const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({key1: 'hello', key2: 'hello2'})
})

app.get('/about', function (req, res) {
  res.send('about.html')
})

app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})
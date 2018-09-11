const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// for parsing application/json
app.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// resolve the function
const func = Object.values(require('./index'))[0]
// call the function on every request
app.all('/*', (request, response) => func(request, response))

app.listen(3000, () => console.log('Server listening on port 3000.'))

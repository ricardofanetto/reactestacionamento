const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

const parkingRouter = require('../module/parking/routes')

app.use('/api/parking', parkingRouter)

mongoose.connect('mongodb+srv://parking:abc123df@cluster0-oq3en.mongodb.net/reactEstacionamento?retryWrites=true&w=majority',
  { useCreateIndex: true, useNewUrlParser: true })

module.exports = app
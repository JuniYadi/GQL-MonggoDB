const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')

const config = require('./config')

//Connect DB
mongoose.connect(config.MONGO_URI, {
    user: config.MONGO_USER,
    pass: config.MONGO_PASS
})

const gqlServer = require('./graphql/schema')

const app = express()
app.use(bodyParser("json"))
app.use(helmet())
app.use(morgan("dev"))

gqlServer.applyMiddleware({ app })


app.listen(config.PORT, () => {
    console.log('server running at', config.PORT)
})
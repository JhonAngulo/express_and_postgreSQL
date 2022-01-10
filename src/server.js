'use strict'

const express = require('express')
const server = express()
const routerApi = require('./routes')
const cors = require('cors')
const helmet = require('helmet')

const { system } = require('./config/variables')
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error_handler')

const whiteList = system.allow_origin

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('not allowed'))
    }
  }
}

server.use(cors(system.production && options))
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

routerApi(server)

server.use(logErrors)
server.use(boomErrorHandler)
server.use(errorHandler)

server.listen(system.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started and listening at http://localhost:${system.port}`)
})

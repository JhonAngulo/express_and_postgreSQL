'use strict'

const { db } = require('../config/variables')

const USER = encodeURIComponent(db.user)
const PASSWORD = encodeURIComponent(db.password)
const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.database}`

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}

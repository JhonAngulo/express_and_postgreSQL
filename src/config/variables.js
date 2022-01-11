'use strict'

require('dotenv').config()

module.exports = {
  system: {
    production: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    allow_origin: JSON.parse(process.env.ALLOW_ORIGIN)
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

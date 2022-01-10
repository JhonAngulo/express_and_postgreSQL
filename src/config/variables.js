'use strict'

require('dotenv').config()

module.exports = {
  system: {
    production: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    allow_origin: JSON.parse(process.env.ALLOW_ORIGIN)
  },
  db: {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD
  }
}

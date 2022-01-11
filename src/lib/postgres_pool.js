'use strict'

const { Pool } = require('pg')
const { db } = require('../config/variables')

// const db_connection = new Pool({
//   host: db.host,
//   port: db.port,
//   user: db.user,
//   password: db.password,
//   database: db.database
// })

const USER = encodeURIComponent(db.user)
const PASSWORD = encodeURIComponent(db.password)
const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.database}`

const db_connection = new Pool({ connectionString: URI })
// eslint-disable-next-line no-console
db_connection.on('error', (err) => console.log(err))

module.exports = db_connection

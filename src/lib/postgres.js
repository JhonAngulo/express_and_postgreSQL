'use strict'

const { Client } = require('pg')
const { db } = require('../config/variables')

async function getConnection () {
  const client = new Client({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.database
  })

  await client.connect()

  return client
}

module.exports = getConnection

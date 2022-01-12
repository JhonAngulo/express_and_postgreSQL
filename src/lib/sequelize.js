'use strict'

const { Sequelize } = require('sequelize')
const { db } = require('../config/variables')
const setupModels = require('../db/models')

const USER = encodeURIComponent(db.user)
const PASSWORD = encodeURIComponent(db.password)
const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.database}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  // eslint-disable-next-line no-console
  logging: (x) => console.log(x)
})

setupModels(sequelize)
// sequelize.sync()

module.exports = sequelize

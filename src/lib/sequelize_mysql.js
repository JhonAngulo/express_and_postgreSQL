'use strict'

const { Sequelize } = require('sequelize')
const { db } = require('../config/variables')
const setupModels = require('../db/models')

const USER = encodeURIComponent(db.user)
const PASSWORD = encodeURIComponent(db.password)
const URI = `mysql://${USER}:${PASSWORD}@${db.host}:${db.mySqlPort}/${db.database}`

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  // eslint-disable-next-line no-console
  logging: (x) => console.log(x)
})

setupModels(sequelize)
sequelize.sync()

module.exports = sequelize

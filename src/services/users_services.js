'use strict'

const boom = require('@hapi/boom')
const { models } = require('../lib/sequelize_mysql')

class UserService {
  constructor () {
    this.table = 'tasks'
  }

  async getAll () {
    const users = await models.User.findAll()
    return users
  }

  async getById ({ id }) {
    const user = await models.User.findByPk(id)

    if (!user) {
      throw boom.notFound(`User id ${id} was not found`)
    }

    // if (!user.enable) {
    //   throw boom.conflict(`User id ${id} was disabled`)
    // }

    return user
  }

  async create ({ first_name, last_name, email, gender, password }) {
    const newUser = await models.User.create({
      first_name,
      last_name,
      email,
      gender,
      password
    })
    return newUser
  }

  async update ({ first_name, last_name, email, gender, password, id }) {
    const user = await this.getById({ id })
    const rta = await user.update({
      first_name,
      last_name,
      email,
      gender,
      password
    })

    return rta
  }

  async delete ({ id }) {
    const user = await this.getById({ id })
    await user.destroy()
    return id
  }
}

module.exports = UserService

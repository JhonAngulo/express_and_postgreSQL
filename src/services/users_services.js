'use strict'

const USERS = require('../mocks/USERS_MOCK_DATA.json')
const boom = require('@hapi/boom')

class UserService {
  constructor () {
    this.table = USERS
  }

  async getAll () {
    const users = this.table
    return users || []
  }

  async getById ({ id }) {
    const user = this.table.find(user => user.id === id)
    if (!user) {
      throw boom.notFound(`User id ${id} was not found`)
    }

    if (!user.enable) {
      throw boom.conflict(`User id ${id} was disabled`)
    }

    return user || {}
  }

  async create ({ first_name, last_name, email, gender }) {
    const newUser = {
      id: this.table.length + 1,
      first_name,
      last_name,
      email,
      gender
    }
    this.table.push(newUser)
    return newUser || []
  }

  async update ({ first_name, last_name, email, gender, id }) {
    const index = this.table.findIndex(user => user.id === id)

    if (index === -1) {
      throw boom.notFound(`User id ${id} was not found`)
    }

    const changes = {
      ...this.table[index],
      first_name,
      last_name,
      email,
      gender
    }
    this.table[index] = changes
    return this.table[index] || []
  }

  async delete ({ id }) {
    const index = this.table.findIndex(user => user.id === id)

    if (index === -1) {
      throw boom.notFound(`User id ${id} was not found`)
    }

    this.table.splice(index, 1)
    return id
  }
}

module.exports = UserService

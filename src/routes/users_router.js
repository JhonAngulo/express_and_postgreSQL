'use strict'

const router = require('express').Router()
const response = require('../middlewares/response_handler')
const validatorHandler = require('../middlewares/validator_handler')
const { getUserSchema, createUserSchema, updateUserSchema } = require('../schemas/user_schema')
const UserService = require('../services/users_services')
const userService = new UserService()

router.get('/', async (req, res, next) => {
  try {
    const users = await userService.getAll()
    response.success({ req, res, message: 'Users List', data: users })
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      const user = await userService.getById({ id })
      response.success({ req, res, message: 'User info', data: user })
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    const { first_name, last_name, email, gender, password, role } = req.body

    try {
      const user = await userService.create({ first_name, last_name, email, gender, password, role })
      response.success({ req, res, message: 'User created', data: user, status: 201 })
    } catch (error) {
      next(error)
    }
  })

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    const { first_name, last_name, email, gender, password, role } = req.body
    const { id } = req.params

    try {
      const userUpdate = await userService.update({ first_name, last_name, email, gender, password, role, id })
      response.success({ req, res, message: 'User updated', data: userUpdate })
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const userId = await userService.delete({ id })
    response.success({ req, res, message: `User with id ${userId} was deleted` })
  } catch (error) {
    next(error)
  }
})

module.exports = router

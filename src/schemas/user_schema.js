'use strict'

const Joi = require('joi')

const id = Joi.number().integer()
const first_name = Joi.string().alphanum().min(3).max(15)
const last_name = Joi.string().alphanum().min(3).max(15)
const email = Joi.string().email()
const gender = Joi.equal('Male', 'Female')
const password = Joi.string().min(8)
const role = Joi.string()

const getUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  first_name: first_name.required(),
  last_name: last_name.required(),
  email: email.required(),
  gender: gender.required(),
  password: password.required(),
  role: role.required()
})

const updateUserSchema = Joi.object({
  first_name: first_name,
  last_name: last_name,
  email: email,
  gender: gender,
  password: password,
  role: role
})

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema
}

'use strict'

const Joi = require('joi')

const id = Joi.string().uuid()
const first_name = Joi.string().alphanum().min(3).max(15)
const last_name = Joi.string().alphanum().min(3).max(15)
const email = Joi.string().email()
const gender = Joi.equal('Male', 'Female')

const getUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  first_name: first_name.required(),
  last_name: last_name.required(),
  email: email.required(),
  gender: gender.required()
})

const updateUserSchema = Joi.object({
  first_name: first_name,
  last_name: last_name,
  email: email,
  gender: gender
})

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema
}

'use strict'

exports.success = ({ req, res, statusCode = 200, message = '', data = [] }) => {
  res.status(statusCode).json({
    statusCode,
    data: data,
    message
  })
}

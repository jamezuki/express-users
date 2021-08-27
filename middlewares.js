// Middlewares execute after request but before sending response
const middlewares = (app) => {
  const express = require('express')

  /* Body Parser for JSON
     Allows server to accept JSON*/
  app.use(express.json())

  // Use of "/users" to make requests instead of "/routes/users"
  const usersRouter = require('./routes/users.js')
  app.use('/users', usersRouter)
}

module.exports = middlewares

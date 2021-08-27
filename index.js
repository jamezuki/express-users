const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const middlewares = require('./middlewares')

/*
dotenv (environment variables)

// Create a .env file with
DB=database url with credentials

// Load .env variables
require('dotenv').config()
*/

dbConnect(process.env.DB)
middlewares(app)

// PORT environment variable is used by Heroku
const PORT = process.env.PORT || 3000

// Server Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

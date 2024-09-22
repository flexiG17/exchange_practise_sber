const express = require('express')

require('express-async-errors')

const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')

const passport = require('passport')
const authorization = require('./middleware/passport')

const authRoutes = require('./routes/authRoutes')
const requestRoutes = require('./routes/request')

const app = express()

app.use(passport.initialize())
passport.use(authorization.strategy)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/request', requestRoutes)

module.exports = app
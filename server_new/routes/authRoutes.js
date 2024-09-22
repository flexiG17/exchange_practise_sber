const express = require('express')
const controller = require('../controllers/auth')
const passport = require('passport')
const upload = require('../middleware/upload')

const router = express.Router()
const auth = passport.authenticate('jwt', {session: false}, null)

// localhost:5000/api/auth/login
router.post('/login', controller.login)

// localhost:5000/api/auth/register
router.post('/register', upload.any(), controller.register)

// localhost:5000/api/auth/createUser
router.post('/createUser', upload.any(), auth, controller.createUser)

// localhost:5000/api/auth/update/:id
router.put('/update/:id', auth, controller.update)

// localhost:5000/api/auth/delete/:id
router.delete('/delete/:id', auth, controller.delete)

// localhost:5000/api/auth/getAll
router.get('/getAll', auth, controller.getAll)

// localhost:5000/api/auth/get/:id
router.get('/get/:id', auth, controller.getById)

module.exports = router
const express = require('express')
const controller = require('../controllers/request')

const router = express.Router()

// localhost:5000/api/request
router.post('/', controller.create)
router.get('/', controller.get)
router.put('/status/', controller.changeStatus)


module.exports = router
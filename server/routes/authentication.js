const express = require('express')

const {signup, login} = require('../controllers/authentication.js')

const router = express.Router()


//routes pertaining signup
router.post('./signup')

//routes pertaining logins
router.post('./login')

module.exports = router //we can use the functional functions throughout our index file

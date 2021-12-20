const express = require('express')
const usercontroller = require('./controllers/usercontroller')


const routes = express.Router()

routes.post('/user', usercontroller.store)
   





module.exports = routes
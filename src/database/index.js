const sequelize = require('sequelize')
const dbconfig = require('../config/databaseconfig')
const user = require('../models/user')

 

const connection = new sequelize(dbconfig)

user.init(connection)


module.exports = connection

let Sequelize = require('sequelize')

let env = process.env.NODE_ENV || 'development' // Are you running locally or at Heroku?
let config = require(__dirname + '/../config.json') [env] // fetching the code you wrote in config.json

let db = {}

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config)
}

let model = sequelize['import']('./student.js') // Lines 14 & 15 read in your model information from student.js
db[model.name] = model // This line creates your model and sets up the database tables in your database

db.sequelize = sequelize
db.sequelize = Sequelize

module.exports = db // export your database for other parts of your code to use
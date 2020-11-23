let express = require('express')
let bodyParser = require('body-parser') // We need to require the body-parser library we installed
let path = require('path')

let api_routes = require('./routes/api.js') // Also require the API routes we created in api.js

let app = express()

app.use(express.static(path.join(__dirname, 'student-sign-in-client', 'dist')))

app.use(bodyParser.json()) // tells our app to use the body parser library. This converts data sent as a part of a API request into json. Also helps convert responses from your server into json to be used by the client 

app.use('/api', api_routes)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(req, res, next) {
    console.error(err.stack)
    res.status(500).send('server error')
})

let server = app.listen(process.env.PORT || 3000, function(){ // process.env.PORT || 3000, is telling our server which port to run on. Ports are used to differentiate which application should an incoming request to be sent to
    // process.env.PORT specifically is reading an environment variable from the computer that's running this code, it it has a value it will use that value if it doesn't it will use 3000 (review), my computer probably doesn't have a variable called port, but Heroku does and that's set automatically 
    console.log('Express server running on port ', server.address().port )
})

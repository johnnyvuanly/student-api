let express = require('express')
let db = require('../models') // This line requires our models directory
let Sequelize = require('sequelize')
let Student = db.Student

let router = express.Router() // A router is when something that matches request to functions that can respond to them

router.get('/students', function(req, res, next){
    Student.findAll( {order: ['name'] }).then( students => { // We want to find all of our students and that returns a promise so we use then
        return res.json(students) // This route is sending a status code of 200
    }).catch( err => next(err))
})

router.post('/students', function(req, res, next){
    Student.create( req.body ).then(data => {
        return res.status(201).send('ok') // Convention is to set status code to 201
    }).catch(err => {
        if (err instanceof Sequelize.ValidationError) { // "This data is not valid and returns an error"
            let messages = err.errors.map (e=>e.message)
            return res.status(400).json(messages)
        }
        return next(err) // If we get a different type of error, we'll stop this event handler and pass the next error handler that can possibly deal with it
    })
})

router.patch('/students/:id', function(req, res, next){
    Student.update( req.body, { where: {id: req.params.id} } )
        .then( rowsModified => {
            if (!rowsModified[0]) {
                // 404 = not found, student with this ID not found
            } else {
                return res.send('ok')
            }
        }).catch( err => {
            if (err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                // 400 code = bad requet from user
                return res.status(400).json(messages)
            }
        })
})

router.delete('/students/:id', function(req, res, next) {
    Student.destroy( {where:{id: req.params.id} } ) // Delete student with a certain id path
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err) )
})

module.exports = router
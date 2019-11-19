// This file is the server
//Use express
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

//Connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
//check if connect succeful or fail
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err))

//importing routes
const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env.PORT || 3000)

//configure the view carpet
app.set('views', path.join(__dirname, 'views'))

//using view engine
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes)

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
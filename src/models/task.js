//Use mongoose to use its schema
const mongoose = require('mongoose')
//This schema define how data is going to look
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

//To use the last schema, pass to mongoose method
//then expots
module.exports = mongoose.model('task', TaskSchema)
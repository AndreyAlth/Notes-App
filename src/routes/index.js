const express = require('express')
const router = express.Router()

//saving on models
// this const task has the dta schema
const Task = require('../models/task')

router.get('/', async (req, res) =>{
    //render the data in the table
    const tableTasks = await Task.find()
    //Render both, the index and the data of the table
    res.render('index', {
        tasks: tableTasks
    })
})

router.post('/add', async (req, res) => {
    //saving tha data
    const task = new Task(req.body)
    await task.save()
    res.redirect('/')
})

router.get('/turn/:id', async (req, res)=>{
    const { id } = req.params
    const task = await Task.findById(id)
    task.status = !task.status
    await task.save()
    res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    res.render('edit', {
        task
    })
})

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params
    await Task.update({_id : id}, req.body)
    res.redirect('/')

})

router.get('/delete/:id', async (req, res) => {
    // const { id } = req.params
    // await Task.remove({_id: id})
    // res.redirect('/')
    const { id } = req.params
    await Task.remove({_id : id})
    res.redirect('/')
})

module.exports = router;
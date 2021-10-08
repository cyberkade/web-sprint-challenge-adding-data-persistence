const express = require('express')
const Tasks = require('./model')

const tasksRouter = express.Router()

tasksRouter.get('/', async (req, res, next)=> {
    try {
        const tasks = await Tasks.get()
        const booltasks = tasks.map(task => {
            if(task.task_completed === 0 || !task.task_completed){
                return {...task, task_completed: false }
            } else if (task.task_completed === 1) {
                return {...task, task_completed: true }
            }
        })
        res.status(200).json(booltasks)
    }
    catch (err) {
        next(err)
    } 
})

tasksRouter.post('/', async (req, res, next)=> {
    try {
        const newtask = await Tasks.insert(req.body)
        if(newtask[0].task_completed === 0) {
            res.status(201).json({...newtask[0], task_completed: false})
        } else if(newtask[0].task_completed === 1) {
            res.status(201).json({...newtask[0], task_completed: true})
        }
    }
    catch (err) {
        next(err)
    } 
})

module.exports = tasksRouter

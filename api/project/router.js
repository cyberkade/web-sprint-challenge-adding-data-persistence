const express = require('express')
const Projects = require('./model')

const projectsRouter = express.Router()

projectsRouter.get('/', async (req, res, next)=> {
    try {
        const projects = await Projects.get()
        const boolProjects = projects.map(project => {
            if(project.project_completed === 0 || !project.project_completed){
                return {...project, project_completed: false }
            } else if (project.project_completed === 1) {
                return {...project, project_completed: true }
            }
        })
        res.status(200).json(boolProjects)
    }
    catch (err) {
        next(err)
    } 
})

projectsRouter.post('/', async (req, res, next)=> {
    try {
        const newProject = await Projects.insert(req.body)
        if(newProject[0].project_completed === 0) {
            res.status(201).json({...newProject[0], project_completed: false})
        } else if(newProject[0].project_completed === 1) {
            res.status(201).json({...newProject[0], project_completed: true})
        }
    }
    catch (err) {
        next(err)
    } 
})

module.exports = projectsRouter

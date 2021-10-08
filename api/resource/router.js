const express = require('express')
const Resources = require('./model')

const resourcesRouter = express.Router()

    resourcesRouter.get('/', async (req, res, next)=> {
        try {
            const resources = await Resources.get()
            res.status(200).json(resources)
        }
        catch (err) {
            next(err)
        } 
    })

    resourcesRouter.post('/', async (req, res, next)=> {
        try {
            const newResource = await Resources.insert(req.body)
            res.status(200).json(newResource)
        }
        catch (err) {
            next(err)
        } 
    })

module.exports = resourcesRouter

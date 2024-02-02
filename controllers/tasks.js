
const Task = require('../models/Task')

const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleTask = async (req, res) => {
    try {
        const {id: taskId} = req.params; 
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId}, req.body)
        if (!task) {
            res.status(404).json({ msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}
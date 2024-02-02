
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must add task name!'],
        trim: true,
        maxlength: [20, 'Task name has 20 letters limit!']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required!'],
        trim: true
    },
    designation: {
        type: String,
        required: [true, 'Designation field is required!'],
        trim: true
    },
    exprerience: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Task', TaskSchema)
module.export = mongoose.model('Employees', EmployeeSchema)
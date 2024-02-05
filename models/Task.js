
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



module.exports = mongoose.model('Task', TaskSchema)
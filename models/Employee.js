
const mongoose = require('mongoose')

const Employees = new mongoose.Schema({
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

module.exports = mongoose.model('Employee', Employees)
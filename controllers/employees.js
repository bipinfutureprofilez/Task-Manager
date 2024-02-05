

const Employees = require('../models/Employee')

const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employees.find({})
        res.status(200).json({ employee })
    } catch (error) {
        res.status(404).json({ error });
    }
    // res.send('Get All employees')
}

const createEmployee = async (req, res) => {
    try {
        const employee = await Employees.create(req.body)
        res.status(201).json({ employee });
    } catch (error) {
        res.status(400).json({ error });
    }
}

const getSingleEmployee = async (req, res) => {
    try {
        const {id: employeeId} = req.params
        const employee = await Employees.findOne({ _id: employeeId })
        if (!employee){
           return res.status(404).json({ msg: `Not available employee with ID: ${employeeId}`})
        }
        res.status(200).json({ employee })
    } catch (error) {
        res.status(400).json({ error });
    }
    // res.send('Get single employees')
}

const updateSingleEmployee = async (req, res) => {
    try {
        const {id: employeeId} = req.params
        const employee = await Employees.findOneAndUpdate({ _id: employeeId }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!employee) {
            return res.status(404).json({ msg: `Not available employee with ID: ${employeeId}` })
        }
        res.status(200).json({ employee })
    } catch (error) {
        res.status(400).json({ error });
    }
}

const deleteSingleEmployee = async (req, res) => {
    try {
        const {id: employeeId} = req.params
        const employee = await Employees.findOneAndDelete({ _id:employeeId })
        if (!employee) {
          return  res.status(404).json({ msg: `Not available employee with ID: ${employeeId}` })
        }
        res.status(200).json({ employee })
    } catch (error) {
        res.status(400).json({ error });
    }
}

module.exports = {
    getAllEmployee,
    createEmployee,
    getSingleEmployee,
    updateSingleEmployee,
    deleteSingleEmployee
}
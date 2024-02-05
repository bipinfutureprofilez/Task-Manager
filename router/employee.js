
const express = require('express')
const router = express.Router()

const {
    getAllEmployee,
    createEmployee,
    getSingleEmployee,
    updateSingleEmployee,
    deleteSingleEmployee
} = require('../controllers/employees')



router.route('/').get(getAllEmployee).post(createEmployee)
router.route('/:id').get(getSingleEmployee).patch(updateSingleEmployee).delete(deleteSingleEmployee)

module.exports = router
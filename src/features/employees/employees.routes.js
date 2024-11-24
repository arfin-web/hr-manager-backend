const express = require("express")
const {
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require("./employees.controller")

const router = express.Router()

router.get("/employees", getEmployees)
router.get("/employees/:id", getEmployeeById)
router.put("/employees/:id", updateEmployee)
router.delete("/employees/:id", deleteEmployee)

module.exports = router
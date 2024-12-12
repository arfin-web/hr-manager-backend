const express = require("express")
const { createDepartment,
    getDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
} = require("./department.controller")

const router = express.Router()

router.post("/departments", createDepartment)
router.get("/departments", getDepartments)
router.get("/departments/:id", getDepartmentById)
router.put("/departments/:id", updateDepartment)
router.delete("/departments/:id", deleteDepartment)

module.exports = router
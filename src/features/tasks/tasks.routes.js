const express = require("express")
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByEmail
} = require("./tasks.controller")

const router = express.Router()

router.post("/tasks", createTask)
router.get("/tasks", getTasks)
router.get("/tasks/:id", getTaskById)
router.get("/tasks/:email", getTasksByEmail)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)

module.exports = router
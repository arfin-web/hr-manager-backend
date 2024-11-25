const express = require("express")
const { createAttendance,
    getAttendance,
    getAttendanceById,
    updateAttendance,
    deleteAttendance
} = require("./attendance.controller")

const router = express.Router()

router.post("/attendances", createAttendance)
router.get("/attendances", getAttendance)
router.get("/attendances/:id", getAttendanceById)
router.put("/attendances/:id", updateAttendance)
router.delete("/attendances/:id", deleteAttendance)

module.exports = router
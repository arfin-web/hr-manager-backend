const express = require("express")
const { createAttendance,
    getAttendance,
    getAttendanceById,
    updateAttendance,
    deleteAttendance
} = require("./attendance.controller")

const router = express.Router()

router.post("/stipends", createAttendance)
router.get("/stipends", getAttendance)
router.get("/stipends/:id", getAttendanceById)
router.put("/stipends/:id", updateAttendance)
router.delete("/stipends/:id", deleteAttendance)

module.exports = router
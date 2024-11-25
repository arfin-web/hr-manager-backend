const express = require("express")
const { createLeaveRequest,
    getLeaveRequests,
    getLeaveRequestById,
    updateLeaveRequest,
    deleteLeaveRequest
} = require("./leave.controller")

const router = express.Router()

router.post("/leaverequests", createLeaveRequest)
router.get("/leaverequests", getLeaveRequests)
router.get("/leaverequests/:id", getLeaveRequestById)
router.put("/leaverequests/:id", updateLeaveRequest)
router.delete("/leaverequests/:id", deleteLeaveRequest)

module.exports = router
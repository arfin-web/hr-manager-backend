const Leave = require("./leave.model")

const createLeaveRequest = async (req, res) => {
    try {
        const { email, name, designation, department, date, reason, status, leaveType } = req.body
        const newLeaveRequest = new Leave({ email, name, designation, department, date, reason, status, leaveType })
        await newLeaveRequest.save()
        res.status(201).json({ message: `Leave Request send Successfully` })
    } catch (error) {
        res.status(500).json({ message: "Error requisting Leave" })
    }
}

const getLeaveRequests = async (req, res) => {
    try {
        const leaveRequests = await Leave.find()
        res.status(200).json({
            message: "Leave Requests fetched successfully",
            data: leaveRequests
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching Leave Requests" })
    }
}

const getLeaveRequestById = async (req, res) => {
    try {
        const leaveRequest = await Leave.findById(req.params.id)
        if (!leaveRequest) {
            return res.status(404).json({ message: "leaveRequest not found" })
        }
        res.status(200).json({
            message: "leaveRequest fetched successfully",
            data: leaveRequest
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaveRequest" })
    }
}

const updateLeaveRequest = async (req, res) => {
    try {
        const updatedLeaveRequest = await Leave.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedLeaveRequest) {
            return res.status(404).json({ message: "Leave Request not found" })
        }
        res.status(200).json({
            message: "Leave Request updated successfully",
            data: updatedLeaveRequest
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Leave Request" })
    }
}

const deleteLeaveRequest = async (req, res) => {
    try {
        const deletedLeaveRequest = await Leave.findByIdAndDelete(req.params.id)
        if (!deletedLeaveRequest) {
            return res.status(404).json({ message: "Leave Request not found" })
        }
        res.status(200).json({
            message: "Leave Request deleted successfully",
            data: deletedLeaveRequest
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Leave Request" })
    }
}

module.exports = {
    createLeaveRequest,
    getLeaveRequests,
    getLeaveRequestById,
    updateLeaveRequest,
    deleteLeaveRequest
}
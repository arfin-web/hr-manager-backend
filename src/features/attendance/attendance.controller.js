const Attendance = require("./attendance.model")

const createAttendance = async (req, res) => {
    try {
        const { employeeId, name, email, designation, department, date, status } = req.body
        const newAttendance = new Attendance({ employeeId, name, email, designation, department, date, status })
        await newAttendance.save()
        res.status(201).json({ message: `Attendance registered with email ${email}` })
    } catch (error) {
        res.status(500).json({ message: "Error registering Attendance" })
    }
}

const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find()
        res.status(200).json({
            message: "Attendance fetched successfully",
            data: attendance
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching attendance" })
    }
}

const getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id)
        if (!attendance) {
            return res.status(404).json({ message: "attendance not found" })
        }
        res.status(200).json({
            message: "attendance fetched successfully",
            data: attendance
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching attendance" })
    }
}

const updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedAttendance) {
            return res.status(404).json({ message: "Attendance not found" })
        }
        res.status(200).json({
            message: "Attendance updated successfully",
            data: updatedAttendance
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Attendance" })
    }
}

const deleteAttendance = async (req, res) => {
    try {
        const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id)
        if (!deletedAttendance) {
            return res.status(404).json({ message: "Attendance not found" })
        }
        res.status(200).json({
            message: "Attendance deleted successfully",
            data: deletedAttendance
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Attendance" })
    }
}

module.exports = {
    createAttendance,
    getAttendance,
    getAttendanceById,
    updateAttendance,
    deleteAttendance
}
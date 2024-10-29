const User = require("../auth/auth.model")

const getEmployees = async (req, res) => {
    try {
        const employees = await User.find()
        res.status(200).json({
            message: "Employees fetched successfully",
            data: employees
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" })
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const employee = await User.findById(req.params.id)
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({
            message: "Employee fetched successfully",
            data: employee
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching employee" })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({
            message: "Employee updated successfully",
            data: updatedEmployee
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await User.findByIdAndDelete(req.params.id)
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({
            message: "Employee deleted successfully",
            data: deletedEmployee
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" })
    }
}

module.exports = {
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}
const Department = require("./department.model")

const createDepartment = async (req, res) => {
    try {
        const { title } = req.body
        const newDepartment = new Department({ title })
        await newDepartment.save()
        res.status(201).json({
            message: "Department created successfully",
            data: newDepartment
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating Department", error })
    }
}

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        res.status(200).json({
            message: "Departments fetched successfully",
            data: departments
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching departments", error })
    }
}

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedDepartment) {
            return res.status(404).json({ message: "Department not found" })
        }
        res.status(200).json({
            message: "Department updated successfully",
            data: updatedDepartment
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Department", error })
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const deletedDepartment = await Department.findByIdAndDelete(id)
        if (!deletedDepartment) {
            return res.status(404).json({ message: "Department not found" })
        }
        res.status(200).json({
            message: "Department deleted successfully",
            data: deletedDepartment
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Department", error })
    }
}

module.exports = {
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment
}
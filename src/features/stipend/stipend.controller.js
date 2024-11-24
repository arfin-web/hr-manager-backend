const Stipend = require("./stipend.model")

const createStipend = async (req, res) => {
    try {
        const { employeeId, name, email, designation, department, stipend, date, month, year, status } = req.body
        const newSipend = new Stipend({ employeeId, name, email, designation, department, stipend, date, month, year, status })
        await newSipend.save()
        res.status(201).json({ message: `Stipend registered with email ${email}` })
    } catch (error) {
        res.status(500).json({ message: "Error registering Stipend" })
    }
}

const getStipends = async (req, res) => {
    try {
        const stipends = await Stipend.find()
        res.status(200).json({
            message: "Stipends fetched successfully",
            data: stipends
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching stipends" })
    }
}

const getStipendsById = async (req, res) => {
    try {
        const stipend = await Stipend.findById(req.params.id)
        if (!stipend) {
            return res.status(404).json({ message: "stipend not found" })
        }
        res.status(200).json({
            message: "stipend fetched successfully",
            data: stipend
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching stipend" })
    }
}

const updateStipend = async (req, res) => {
    try {
        const updatedStipend = await Stipend.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedStipend) {
            return res.status(404).json({ message: "Stipend not found" })
        }
        res.status(200).json({
            message: "Stipend updated successfully",
            data: updatedStipend
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating Stipend" })
    }
}

const deleteStipend = async (req, res) => {
    try {
        const deletedStipend = await Stipend.findByIdAndDelete(req.params.id)
        if (!deletedStipend) {
            return res.status(404).json({ message: "Stipend not found" })
        }
        res.status(200).json({
            message: "Stipend deleted successfully",
            data: deletedStipend
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting Stipend" })
    }
}

module.exports = {
    createStipend,
    getStipends,
    getStipendsById,
    updateStipend,
    deleteStipend
}
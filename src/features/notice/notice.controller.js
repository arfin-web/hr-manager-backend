const Notice = require("./notice.model")

const createNotice = async (req, res) => {
    try {
        const { title, description, note, date } = req.body
        const newNotice = new Notice({ title, description, note, date })
        await newNotice.save()
        res.status(201).json({
            message: "Notice created successfully",
            data: newNotice
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating notice", error })
    }
}

const getNotice = async (req, res) => {
    try {
        const notices = await Notice.find()
        res.status(200).json({
            message: "Notices fetched successfully",
            data: notices
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching notices", error })
    }
}

const updateNotice = async (req, res) => {
    try {
        const { id } = req.params
        const updatedNotice = await Notice.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedNotice) {
            return res.status(404).json({ message: "Notice not found" })
        }
        res.status(200).json({
            message: "Notice updated successfully",
            data: updatedNotice
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating notice", error })
    }
}

const deleteNotice = async (req, res) => {
    try {
        const { id } = req.params
        const deletedNotice = await Notice.findByIdAndDelete(id)
        if (!deletedNotice) {
            return res.status(404).json({ message: "Notice not found" })
        }
        res.status(200).json({
            message: "Notice deleted successfully",
            data: deletedNotice
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting notice", error })
    }
}

module.exports = {
    createNotice,
    getNotice,
    updateNotice,
    deleteNotice
}
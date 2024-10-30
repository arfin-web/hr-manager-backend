const Task = require("./tasks.model")

const createTask = async (req, res) => {
    try {
        const { email, title, instruction, deadlinedate, deadlinetime, submitTask, status } = req.body
        const newTask = new Task({ email, title, instruction, deadlinedate, deadlinetime, submitTask, status })
        await newTask.save()
        res.status(201).json({
            message: "Task created successfully",
            data: newTask
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error })
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json({
            message: "Tasks fetched successfully",
            data: tasks
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error })
    }
}

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({
            message: "Task fetched successfully",
            data: task
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching task", error })
    }
}

const getTasksByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const tasks = await Task.find({ email })
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for this user" })
        }
        res.status(200).json({
            message: `${email}'s Tasks fetched successfully`,
            data: tasks
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks by email", error })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({
            message: "Task updated successfully",
            data: updatedTask
        })
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.status(200).json({
            message: "Task deleted successfully",
            data: deletedTask
        })
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error })
    }
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    getTasksByEmail,
    updateTask,
    deleteTask
}
const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    instruction: {
        type: String,
        required: true,
    },
    deadlinedate: {
        type: String,
        required: true,
    },
    deadlinetime: {
        type: String,
        required: true,
    },
    submitTask: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        required: true,
        default: "pending",
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Tasks", tasksSchema)
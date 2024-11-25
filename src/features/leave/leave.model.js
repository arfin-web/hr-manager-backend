const mongoose = require("mongoose")

const leaveSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Leave", leaveSchema)
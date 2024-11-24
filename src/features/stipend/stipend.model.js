const mongoose = require("mongoose")

const stipendSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
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
    stipend: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "paid",
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Stipend", stipendSchema)
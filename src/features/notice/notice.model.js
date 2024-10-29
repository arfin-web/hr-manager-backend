const mongoose = require("mongoose")

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Notice", noticeSchema)
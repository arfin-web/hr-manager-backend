const express = require("express")
const { createNotice,
    getNotice,
    updateNotice,
    deleteNotice
} = require("./notice.controller")

const router = express.Router()

router.post("/notice", createNotice)
router.get("/notice", getNotice)
router.put("/notice/:id", updateNotice)
router.delete("/notice/:id", deleteNotice)

module.exports = router
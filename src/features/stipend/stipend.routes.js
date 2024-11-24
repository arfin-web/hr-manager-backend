const express = require("express")
const { createStipend,
    getStipends,
    getStipendsById,
    updateStipend,
    deleteStipend
} = require("./stipend.controller")

const router = express.Router()

router.post("/stipends", createStipend)
router.get("/stipends", getStipends)
router.get("/stipends/:id", getStipendsById)
router.put("/stipends/:id", updateStipend)
router.delete("/stipends/:id", deleteStipend)

module.exports = router
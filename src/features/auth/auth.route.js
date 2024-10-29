const express = require("express")
const { register, login, getProfile } = require("./auth.controller")
const authMiddleware = require("./auth.middleware")

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/profile", authMiddleware, getProfile)

module.exports = router
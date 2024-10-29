const express = require("express")
const dotenv = require("dotenv").config()
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./features/auth/auth.route")

dbConnect()

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/api/v1/auth", authRoutes)

// Start the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
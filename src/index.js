const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

// Middleware
app.use(express.json())

// Start the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
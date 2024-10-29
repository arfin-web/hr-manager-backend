const express = require("express")
const dotenv = require("dotenv").config()
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./features/auth/auth.route")
const employeesRoute = require("./features/employees/employees.route")
const noticeRoute = require("./features/notice/notice.route")
const tasksRoute = require("./features/tasks/tasks.routes")

dbConnect()

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1", employeesRoute)
app.use("/api/v1", noticeRoute)
app.use("/api/v1", tasksRoute)

// Start the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
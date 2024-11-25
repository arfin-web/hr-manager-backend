const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./features/auth/auth.routes")
const employeesRoute = require("./features/employees/employees.routes")
const noticeRoute = require("./features/notice/notice.routes")
const tasksRoute = require("./features/tasks/tasks.routes")
const departmentRoute = require("./features/department/department.routes")
const stipendRoute = require("./features/stipend/stipend.routes")
const attendanceRoute = require("./features/attendance/attendance.routes")
const leaveRoute = require("./features/leave/leave.routes")

dbConnect()

const app = express()
app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:3000', 'https://hr-manager-iota.vercel.app'],
    credentials: true,
    optionSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1", employeesRoute)
app.use("/api/v1", noticeRoute)
app.use("/api/v1", tasksRoute)
app.use("/api/v1", departmentRoute)
app.use("/api/v1", stipendRoute)
app.use("/api/v1", attendanceRoute)
app.use("/api/v1", leaveRoute)

// Define Root Get Route
app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

// Start the Server
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("./auth.model")

const register = async (req, res) => {
    try {
        const { name, email, image, designation, stipend, password, role } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, image, designation, stipend, password: hashedPassword, role })
        await newUser.save()
        res.status(201).json({ message: `User registered with email ${email}` })
    } catch (error) {
        res.status(500).json({ message: "Error registering user" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: `User with this email ${email} not found` })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "3h"
        })
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" })
    }
}

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({
            message: "User profile fetched successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile data" })
    }
}

module.exports = {
    register,
    login,
    getProfile
}
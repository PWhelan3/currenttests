// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    profilePicture: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

// Encrypt password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);



// routes/users.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// @route    POST /api/users/register
// @desc     Register user
router.post('/register', registerUser);

// @route    POST /api/users/login
// @desc     Login user
router.post('/login', loginUser);

module.exports = router;

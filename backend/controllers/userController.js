const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



const getUsers = asyncHandler(async (req, res) => {
    const receivedUsers = await User.find();
    res.status(200).json(receivedUsers);
});

const createUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        res.status(400)
        throw new Error('Please fill in all fields')
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
        res.status(400)
        throw new Error('User not found');
    }

    res.status(200).json(deletedUser);
});

const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    if (!updatedUser) {
        res.status(400);
        throw new Error('User not found');
    }

    res.status(200).json(updatedUser);
});

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
}
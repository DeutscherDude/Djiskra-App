const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const getUsers = asyncHandler(async (req, res) => {
    const receivedUsers = await User.find();
    res.status(200).json(receivedUsers);
});

const createUser = asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
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
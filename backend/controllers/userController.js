const asyncHandler = require('express-async-handler');


const getUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: "Request body missing, have you added all lookup variables?" });
    }
    res.status(200).json({ message: "respond with a user file" });
});

const createUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User has been created" });
});

const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User has been deleted" });
});

const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User has been updated" });
});

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
}
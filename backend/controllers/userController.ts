import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

export const getUsers = asyncHandler(async (req, res) => {
    const receivedUsers = await User.find();
    res.status(200).json(receivedUsers);
});

export const createUser = asyncHandler(async (req, res) => {
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

export const deleteUser = asyncHandler(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
        res.status(400)
        throw new Error('User not found');
    }

    res.status(200).json(deletedUser);
});


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(400)
        throw new Error('Incorrect credentials')
    }
})


export const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    if (!updatedUser) {
        res.status(400);
        throw new Error('User not found');
    }

    res.status(200).json(updatedUser);
});

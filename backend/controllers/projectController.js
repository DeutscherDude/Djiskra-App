const asyncHandler = require('express-async-handler');

const Project = require('../models/projectModel');


const getProjects = asyncHandler(async (req, res) => {
    const receviedProjects = await Project.find({ "user" : req.user.id });

    if (!req.params.user.id){
        req.statusCode(400);
        throw new Error('Projects not found, are you logged in?')
    } 

    res.status(200).json(receviedProjects);
});

const createProject = asyncHandler(async (req, res) => {
    const createdProject = await Project.create(req.body);

// To add a list of required params and search through it to improve readibility

    if (!req.body.name || !req.body.category 
        || !req.body.description || !req.body.link 
        || !req.body.image || ! req.user.id){

        req.statusCode(400);
        throw new Error('Please fill out all fields')
    }

    res.status(201).json(createdProject);
});

const updateProject = asyncHandler(async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    if (!updatedProject) {
        res.status(400);
        throw new Error('Project not found');
    }

    res.status(200).json(updatedProject);
})

const deleteProject = asyncHandler(async (req, res) => {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
        res.status(400)
        throw new Error('Project not found');
    }

    res.status(200).json(deletedProject);
})

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
}

import Project from '../models/projectModel';
import { Request, Response } from 'express';

const asyncHandler = require('express-async-handler');


const getProjects = asyncHandler(async (req: Request, res: Response) => {
    const receviedProjects = await Project.find({ "user": req.user.id });

    if (!req.params.user.id) {
        req.statusCode(400);
        throw new Error('Projects not found, are you logged in?')
    }

    res.status(200).json(receviedProjects);
});

const createProject = asyncHandler(async (req: Request, res: Response) => {
    const createdProject = await Project.create(req.body);

    // To add a list of required params and search through it to improve readibility
    const { name, category, description, link, image, id } = req.body;

    if (!name || !category || !description || !link || !id) {
        req.statusCode(400).json('Please fill in all required fileds');
        throw new Error('Please fill in all required fields')
    }

    res.status(201).json(createdProject);
});

const updateProject = asyncHandler(async (req: Request, res: Response) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    if (!updatedProject) {
        res.status(400);
        throw new Error('Project not found');
    }

    res.status(200).json(updatedProject);
})

const deleteProject = asyncHandler(async (req: Request, res: Response) => {
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

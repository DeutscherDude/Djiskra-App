var express = require('express');
var router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');


router.route('/').get(getProjects).post(createProject);
router.route('/:id').delete(deleteProject).put(updateProject);


export { router as projectRouter };

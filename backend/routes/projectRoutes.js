var express = require('express');
var router = express.Router();
const { getProject, createProject, updateProject, deleteProject } = require('../controllers/projectController');


router.route('/').get(getProject).post(createProject);
router.route('/:id').delete(deleteProject).put(updateProject);

module.exports = router;
var express = require('express');
var router = express.Router();
const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;

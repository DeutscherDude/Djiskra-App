var express = require('express');
var router = express.Router();
const { getUsers, createUser, deleteUser, updateUser, loginUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').delete(deleteUser).put(updateUser);

router.route('/login').get(loginUser);

module.exports = router;

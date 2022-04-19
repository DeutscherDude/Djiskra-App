var express = require('express');
var router = express.Router();
const { getUser, createUser, deleteUser, updateUser } = require('../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;

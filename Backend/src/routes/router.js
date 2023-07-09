const express = require('express');
const router = express.Router();
const {users, createTeam} = require('../controller/users')

router.get('/' , users);
router.post('/createTeam' , createTeam);

module.exports = router;
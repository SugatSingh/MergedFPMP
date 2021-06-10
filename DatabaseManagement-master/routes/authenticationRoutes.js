const express = require('express');
const router = express.Router();
const checkJwt = require('../middleware/check_jwt');
const login = require('../mysql/User/login');

router.post('/login', login);
router.post('/changepassword',checkJwt, changePassword);

module.exports = router;
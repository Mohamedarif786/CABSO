const express =require('express');
const router =express.Router();
const {login} = require('../controller/auth.controller.js');

router.get('/login',login)

module.exports =router;
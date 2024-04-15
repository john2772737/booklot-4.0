const express = require("express");
const router = express.Router();
const {createadmin}= require('../controller/admin.controller');

router.post('/createadmin',createadmin)



module.exports = router;
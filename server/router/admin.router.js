const express = require("express");
const router = express.Router();
const {createadmin, listAdmin}= require('../controller/admin.controller');

router.post('/createadmin',createadmin)
router.get('/listAdmin',listAdmin)


module.exports = router;

const express = require('express'); //import express

// const multer = require('multer')

// const upload = multer();

// 1.
const router  = express.Router(); 
// 2.
const teaController = require('../controllers/theromstats'); 
// 3.
router.post('/thermostats', teaController.uploadImg, teaController.newThermostats); 
// 4. 
module.exports = router; // export to use in server.js
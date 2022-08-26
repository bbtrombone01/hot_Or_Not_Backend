
const express = require('express'); //import express


// 1.
const router  = express.Router(); 
// 2.
const thermostatsController = require('../controllers/theromstats'); 


// 3.
router.post('/thermostats', thermostatsController.uploadImg, thermostatsController.newThermostats); 

router.get('/random', thermostatsController.getAllThermostats)

router.patch('/increment', thermostatsController.updateThermostats)
// 4. 
module.exports = router; // export to use in server.js
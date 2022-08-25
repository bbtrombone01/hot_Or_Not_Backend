const express = require('express')

const router = express.Router()

const thermoController = require(`../controllers/theromstats`)

router.post('/thermostat', thermoController.newThermostat)


module.exports = router
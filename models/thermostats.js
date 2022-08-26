const mongoose = require('mongoose')

const ThermostatSchema = new mongoose.Schema({
    hot: Number,
    not: Number,
    image: String
})


const Thermostat = mongoose.model('Thermostat', ThermostatSchema)

module.exports = Thermostat
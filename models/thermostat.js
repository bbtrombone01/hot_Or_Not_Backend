const mongoose = require('mongoose')

const ThermostatSchema = new mongoose.Schema({
    hot: int,
    not: int,
    image: string
})


const Thermostat = mongoose.model('Thermostat', ThermostatSchema)

module.exports = Thermostat
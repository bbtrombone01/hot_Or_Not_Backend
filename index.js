const { json } = require('express')

const express = require('express')

const routes = require(`./routes/thermostat`)

const app = express()


app.use(express,json())

app.use('/', routes)

const listener = app.listen(process.env.Port || 3000 ,()=>{
    console.log("hello wolrd")
})
// const { config } = require('dotenv')
// const { json } = require('express')

const express = require('express')

const mongoose = require('mongoose')

require('dotenv'),config

const routes = require(`./routes/thermostat`)

const app = express()


app.use(express,json())

app.use('/', routes)

 //import mongoose

 //establish connection to database
 mongoose.connect(
    process.env.MONGODB_URI ,
     { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
     (err) => {
         if (err) return console.log("Error: ", err);
         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
     }
 );
 


const listener = app.listen(process.env.Port || 3000 ,()=>{
    console.log("hello wolrd")
})
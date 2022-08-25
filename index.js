const { json } = require('express')
const express = require('express')
const app = express()


app.use(express,json())

const listener = app.listen(process.env.Port || 3000 ,()=>{
    console.log("hello wolrd")
})
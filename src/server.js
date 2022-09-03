
//importing modules
const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const connect = require("./configs/db.config")
//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const {signup,signin} = require('./controllers/auth.controller')

app.post("/signup",signup)
app.post("/signin",signin)
const port = 4000
const start = async () =>{
  await connect()
  app.listen(port,()=>{
      console.log(`running.. ${port}`)
  })
}

module.exports = start
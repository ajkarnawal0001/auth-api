
const express = require('express')
const connect = require("./configs/db.config")
const app = express()
app.use(express.json())

const {signup,signin} = require('./controllers/auth.controller')
const productController = require("./controllers/product.controller")
app.post("/signup",signup)
app.post("/signin",signin)
app.use("/product",productController)

const port = 4000
const start = async () =>{
  await connect()
  app.listen(process.env.PORT || 4400,()=>{
      console.log(`running.. ${port}`)
  })
}

module.exports = start
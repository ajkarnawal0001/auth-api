const express = require('express')
const authorise = require('../middlewares/authrization')
const protect = require('../middlewares/protect')
const router = express.Router()
const Product = require("../model/product.model")

router.post("" ,protect, authorise(["admin","seller"]) , async (req,res)=>{
    const {user} =  req.user
    const product = await Product.create({
        name:req.body.name,
        price: req.body.price,
        lister: user._id
    })

    return res.status(201).send({product})
})

module.exports = router
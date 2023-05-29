const Product = require('../models/productModel')
const mongoose = require('mongoose')

// CREATE product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
}

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  createProduct,
  getProducts
}
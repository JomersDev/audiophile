const express = require('express')
const { getProducts, createProduct } = require('../controller/productController')

const router = express.Router()

// GET all products
router.get('/', getProducts)

// CREATE product
router.post('/', createProduct)


module.exports = router
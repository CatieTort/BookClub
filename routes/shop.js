const express = require('express')

const shopController = require('../controllers/shop')

const adminData = require('./admin')

const router = express.Router()

router.get('/', shopController.getIndex)

router.get('/books', shopController.getBooks)

router.get('/cart', shopController.showCart)

router.get('/checkout', shopController.goToCheckout )

module.exports = router;

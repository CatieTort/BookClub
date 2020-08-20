const express = require('express')

const shopController = require('../controllers/shop')

const adminData = require('./admin')

const router = express.Router()

router.get('/', shopController.getIndex)

router.get('/books', shopController.getBooks)

router.get('/books/:bookId', shopController.getBookDetails)

router.post('/cart/:bookId', shopController.addToCart)

router.get('/cart', shopController.showCart)

router.post('/cart-delete-item', shopController.deleteCartItem)

router.get('/checkout', shopController.goToCheckout )

router.get('/orders', shopController.showOrders)

module.exports = router;

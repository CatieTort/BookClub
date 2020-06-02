const express = require('express')
const adminController = require('../controllers/admin')

const router = express.Router()

router.get('/add-book', adminController.getAddBook)

router.get('/list-books', adminController.getBooks)

router.post('/add-book', adminController.postAddBook)


module.exports = router;

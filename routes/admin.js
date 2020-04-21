const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'))
})

router.post('/add-product', (req,res,next) => {

})

module.exports = router;

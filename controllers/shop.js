const Book = require('../models/book')

exports.getIndex = (req, res, next) => {
    res.render('shop/index', { pageTitle: 'Book Club', path: '/'})
}

exports.getBooks = (req, res, next) => {
    const books = Book.fetchAll()
    res.render('shop/book-list', 
    { books: books,
      path: '/book-list',
      pageTitle: 'All Books', 
      imageURL: 'shore.jpg' });
}

exports.showCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: "Cart", path: '/cart'})
}

exports.goToCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: "Checkout", path: '/checkout'})
}
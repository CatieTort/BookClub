const Book = require('../models/book')
const Cart = require('../models/cart')

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

exports.getBookDetails = (req, res, next) => {
    const bookId = req.params.bookId
    Book.getBookById(bookId, book => {
        res.render('shop/book-detail', {book: book, pageTitle: book.title, path: '/books' })
    })
}

exports.showCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: "Cart", path: '/cart'})
}

exports.addToCart = (req, res, next) => {
    const bookId = req.params.bookId
    Book.getBookById(bookId, (book) => {
        Cart.addBook(bookId, book.price)
    })
    res.redirect('/cart')
}

exports.goToCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: "Checkout", path: '/checkout'})
}

exports.showOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: "Your Orders", path: '/orders'})
}
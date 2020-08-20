const Book = require('../models/book')
const Cart = require('../models/cart')

exports.getIndex = (req, res, next) => {
   res.render('shop/index', { pageTitle: 'Book Club', path: '/'}) 
}

exports.getBooks = (req, res, next) => {
    Book.fetchAll().then((rows) => {
        res.render("shop/book-list", {
        books: rows[0],
        path: "/book-list",
        pageTitle: "All Books",
        imageURL: "shore.jpg"
        });
    }).catch(err => console.log(err));
   
}

exports.getBookDetails = (req, res, next) => {
    const bookId = req.params.bookId
    Book.getBookById(bookId).then((rows) => {
        console.log(rows[0]);
    }).catch(err => console.log(err));
     //res.render('shop/book-detail', {book: rows[0], pageTitle: book.title, path: '/book-detail' })
}


exports.showCart = (req, res, next) => {
    Cart.getCart(cart => {
        Books.fetchAll().then((rows) => {
            const cartBooks = []
            for (row of rows[0]) {
                const cartBookData = cart.books.find(b => b.book_id === row.book_id)
                if(cartBookData){
                    cartBooks.push({bookData: row, qty: cartBookData.qty })
                }
            }
            res.render('shop/cart', { pageTitle: "Cart", path: '/cart', books: cartBooks  })
        })
    })
}

exports.addToCart = (req, res, next) => {
    const bookId = req.params.bookId
    Book.getBookById(bookId, (book) => {
        Cart.addBook(bookId, book.price)
    })
    res.redirect('/cart')
}

exports.deleteCartItem = (req,res, next) => {
    const cartItemId = req.body.id
    Books.getBookById(cartItemId, book => {
        Cart.deleteBook(cartItemId, book.price)
        res.redirect('/cart')
    })
}

exports.goToCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: "Checkout", path: '/checkout'})
}

exports.showOrders = (req, res, next) => {
    res.render('shop/orders', {pageTitle: "Your Orders", path: '/orders'})
}
const Book = require('../models/book')


exports.getAddBook = (req, res, next) => {
    res.render('admin/edit-book', { pageTitle: "Add Book", path: '/add-book' })
}

exports.postAddBook = (req, res, next) => {
    const book = new Book(req.body)
    product.save()
    res.redirect('admin/list-books', { pageTitle: 'Book List', path: '/list-books'} )
}

exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit
    res.render('admin/edit-book', { pageTitle: "Add Book", path: '/edit-book', editing: editMode })
}

exports.getBooks = (req, res, next) => {
    const Books = Book.fetchAll()
    res.render('admin/list-books',
        {
            books: Books,
            path: '/list-books',
            pageTitle: 'Book List',
            imageURL: 'shore.jpg'
        });
}

exports.noRouteFound = (req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page Not Found", path: '/not-found' })
}
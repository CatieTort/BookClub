const Book = require('../models/book')

exports.getAddBook = (req, res, next) => {
    res.render('admin/edit-book', { pageTitle: "Add Book", path: '/add-book', editing: false })
}

exports.postAddBook = (req, res, next) => {
    const book = new Book(req.body)
    Book.save(book)
    res.redirect('admin/list-books', { pageTitle: 'Book List', path: '/list-books'} )
}

exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit
    const bookID = req.params.bookId
    Book.getBookById(bookID).then((rows) => {
        if(!rows[0]){
            res.redirect('/')
            //show error to user
        }
        res.render('admin/edit-book',
            {
                pageTitle: "Edit Book",
                path: '/edit-book',
                editing: editMode,
                book: rows[0],
                bookId: bookId
            })
    })
}

exports.postEditBook = (req, res, next) => {
    const updatedBook = req.body
    Book.updateBooks(updatedBook)
    res.redirect('/admin/list-books')
}


exports.postDeleteBook = (req,res, next) => {
    const bookId = req.body.bookID
    Book.deleteById(bookId);
    res.redirect('/admin/list-books')
}

exports.getBooks = (req, res, next) => {
    Book.fetchAll().then((rows) => {
         res.render('admin/list-books',
        {
            books: rows[0],
            path: '/list-books',
            pageTitle: 'Book List',
        });
    })
   
}

exports.noRouteFound = (req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page Not Found", path: '/not-found' })
}
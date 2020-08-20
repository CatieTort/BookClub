const db = require('../utils/database');

module.exports = class Book {
    constructor(bookData){
        this.id = bookData.id
        this.title = bookData.title
        this.author = bookData.author_fname + ' ' + bookData.author_lname
        this.genre = bookData.genre
        this.price = bookData.price
        this.desc = bookData.desc
    }

    save(){
        books.push(this)
    }

    static deleteById(id){
       return db.execute(`DELETE * FROM books where book_id = ${id};`)
    }

    static fetchAll(){
        return db.execute('SELECT * FROM books;');
    }

    static getBookById(id){
       return db.execute(`SELECT * FROM books where book_id = ${id};`);
    }

    static updateBooks(updateBookData){
        //query for book by id
        const updateBook = books.findIndex(b => b.id === updateBookData.id)
        const updatedBooks = [...books]
        updatedBooks[updateBook] = updateBookData
    }
}
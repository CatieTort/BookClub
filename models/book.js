const books = []

module.exports = class Book {
    constructor(bookData){
        this.id = bookData.id
        this.title = bookData.title
        this.author = bookData.author
        this.genre = bookData.genre
        this.price = bookData.price
        this.desc = bookData.desc
    }

    save(){
        books.push(this)
    }

    static fetchAll(){
        return books
    }

    static getBookById(id,cb){
        //query for book by id
        const book = books.find(b => b.id === id)
        cb(book)
    }
}
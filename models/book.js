const books = []

module.exports = class Book {
    constructor(bookData){
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
}
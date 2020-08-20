const db = require("../utils/database");

module.exports =  class Cart {
    static addBook(id, price){
        //get cart from db
        let cart = {books: [], totalPrice: 0}
        if(!err){
            cart = JSON.parse()
        }

        const existingBookIndex = cart.books.findIndex(b => b.id === id);
        let existingBook = cart.books[existingBookIndex]
        let updatedBook
        if(existingBook){
            updatedBook = {...existingBook}
            updatedBook.qty = updatedBook.qty + 1
            cart.books = [...cart.books]
            cart.books[existingBookIndex] = updatedBook 
        }else {
            updatedBook = {id: id, qty: 1}
        }
        cart.totalPrice = cart.totalPrice + +price
        //save to db
    }

    static deleteBook(id){
        return db.execute(`DELETE * FROM cart where item_id = ${id};`)
    }

    static getCart(memberId){
       return db.execute(`SELECT * FROM cart where member_id = ${memberId};`)
    }

}
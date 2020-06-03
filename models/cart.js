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

}
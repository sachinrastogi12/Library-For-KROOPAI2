import Book from '../model/book.js';

// Get all books
export const getBooks = async (request, response) => {
    try{
        const books = await Book.find();
        response.status(200).json(books);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the book in database
export const addBook = async (request, response) => {
    const book = request.body;
    
    const newBook = new Book(book);
    try{
        await newBook.save();
        response.status(201).json(newBook);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a book by id
export const getBookById = async (request, response) => {
    try{
        const book = await Book.findById(request.params.id);
        response.status(200).json(book);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited book in the database
export const editBook = async (request, response) => {
    let book = request.body;

    const editBook = new Book(book);
    try{
        await Book.updateOne({_id: request.params.id}, editBook);
        response.status(201).json(editBook);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of book from the database
export const deleteBook = async (request, response) => {
    try{
        await Book.deleteOne({_id: request.params.id});
        response.status(201).json("Book deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
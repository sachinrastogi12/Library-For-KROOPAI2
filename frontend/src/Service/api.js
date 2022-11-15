import axios from 'axios';

// const booksUrl = 'http://localhost:3003/books';
const booksUrl = 'http://localhost:8080';

export const getBooks = async (id) => {
    id = id || '';
    return await axios.get(`${booksUrl}/${id}`);
}

export const addBook = async (book) => {
    return await axios.post(`${booksUrl}/add`, book);
}

export const deleteBook = async (id) => {
    return await axios.delete(`${booksUrl}/${id}`);
}

export const editBook = async (id, book) => {
    return await axios.put(`${booksUrl}/${id}`, book)
}
import express from 'express';
import { getBooks, addBook, getBookById, editBook, deleteBook } from '../controller/book-controller.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/add', addBook);
router.get('/:id', getBookById);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);

export default router;
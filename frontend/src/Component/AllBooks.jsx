import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getBooks, deleteBook } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
    
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 30px
    }
`;

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getAllBooks();
    }, []);

    const deleteBookData = async (id) => {
        await deleteBook(id);
        getAllBooks();
    }

    const getAllBooks = async () => {
        let response = await getBooks();
        setBooks(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Book Name</TableCell>
                    <TableCell>Author Name</TableCell>
                    <TableCell>Year of Publication</TableCell>
                    <TableCell>Number of Copies Available</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {books.map((book) => (
                    <TRow key={book.id}>
                        <TableCell>{book._id}</TableCell> {/* change it to book.id to use JSON Server */}
                        <TableCell>{book.name}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.year}</TableCell>
                        <TableCell>{book.copies}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${book._id}`}>Edit</Button> {/* change it to book.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteBookData(book._id)}>Delete</Button> {/* change it to book.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllBooks;
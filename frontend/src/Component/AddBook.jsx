import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addBook } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    author: '',
    year: '',
    copies: ''
}

const Container = styled(FormGroup)`
    width: 30%;
    margin: 2% 0 0 2%;
    & > div {
        margin-top: 50px;
`;

const AddBook = () => {
    const [book, setBook] = useState(initialValue);
    const { name, author, year, copies } = book;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const addBookDetails = async() => {
        await addBook(book);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Book</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Author Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Year of Publication</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='year' value={year} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Number of Copies Available</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='copies' value={copies} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addBookDetails()}>Add Book</Button>
            </FormControl>
        </Container>
    )
}

export default AddBook;
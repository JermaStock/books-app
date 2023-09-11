import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksItems = () => {
    const {
        booksPagination,
    } = useSelector((state) => state.booksReducer);

    return (
      <Grid container spacing={3}>
        {booksPagination.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </Grid>
    );
};

export default BooksItems;
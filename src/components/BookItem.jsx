import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BookItem = ({ book }) => {
  const router = useNavigate();

  return (
    <Grid xs={12} sm={6} md={3} item>
      <Card
        onClick={() => router(`/books/${book.id}`)}
        sx={{ height: "100%", display: "flex", flexDirection: "column", background: '#eceff1' }}
      >
        <CardMedia
          sx={{ width: 128, height: 187, display: 'inline-block', mx: 'auto', my: '2rem', boxShadow: 3}}
          image={book.volumeInfo.imageLinks?.smallThumbnail ?? "./no-image-ph.svg"}
          title={book.volumeInfo.title}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h8" component="div">
            {book.volumeInfo.title}
          </Typography>
          <Typography
            sx={{ mt: "auto" }}
            variant="body2"
            color="text.secondary"
          >
            {book.volumeInfo.categories && book.volumeInfo.categories[0]}
          </Typography>
          {book.volumeInfo.authors &&
            book.volumeInfo.authors.map((a, i) => (
              <Typography key={i} variant="body2" color="text.secondary">
                {a}
              </Typography>
            ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BookItem;

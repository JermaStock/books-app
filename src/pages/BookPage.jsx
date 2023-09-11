import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBook } from '../store/reducers/ActionCreators';
import { Box, Grid, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { zoomedInImg } from '../utils/utils';
import BackButton from '../components/BackButton';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';

const BookPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {
      book: { volumeInfo },
      isLoading,
      error,
    } = useSelector((state) => state.bookReducer);
    useEffect(() => {
        dispatch(fetchBook(id));
    }, [])

    if (error) {
      return <ErrorMessage message={error} />;
    }

    return isLoading ? (
      <Loader />
    ) : (
      <Box>
        <BackButton />
        <Grid spacing={2} container sx={{ mt: "2rem" }}>
          <Grid
            xs={12}
            md={6}
            item
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              className='large-thumbnail'
              style={{ aspectRatio: "2/3" }}
              height={600}
              src={
                volumeInfo?.imageLinks?.thumbnail
                  ? zoomedInImg(volumeInfo.imageLinks.thumbnail)
                  : "./no-image-ph.svg"
              }
              alt="123"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ color: "#455a64" }}
            >
              {volumeInfo?.title}
            </Typography>

            <Typography
              gutterBottom
              variant="h8"
              component="h3"
              sx={{ color: "#607d8b" }}
            >
              {volumeInfo?.subtitle}
            </Typography>

            <Typography gutterBottom variant="subtitle1" component="p">
              {volumeInfo?.categories?.map((c, i) => (
                <Typography key={i} component="span" sx={{ color: "#90a4ae" }}>
                  {c}
                </Typography>
              ))}
            </Typography>

            <Typography gutterBottom variant="subtitle1" component="div">
              {volumeInfo?.authors?.map((c, i) => (
                <Typography key={i} component="div" variant="body2">
                  {c}
                </Typography>
              ))}
            </Typography>

            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ mt: "3rem" }}
            >
              {parse(volumeInfo?.description ?? "")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
};

export default BookPage;
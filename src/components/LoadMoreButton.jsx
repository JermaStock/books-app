import { Box, Button } from '@mui/material';
import React from 'react';

const LoadMoreButton = (props) => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button {...props} variant="contained" sx={{ mt: "3rem", background: '#546e7a'}}>
          Load More
        </Button>
      </Box>
    );
};

export default LoadMoreButton;
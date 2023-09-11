import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "2rem"
        }}
      >
        <CircularProgress 
            size={80}
        />
      </Box>
    );
};

export default Loader;
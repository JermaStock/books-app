import { Box, Typography } from '@mui/material';
import React from 'react';

const Result = ({ value }) => {
  return (
    <Box>
      <Typography
        component="h3"
        variant="h4"
        sx={{
          color: "#607d8b",
          mb: "2rem",
          "@media (max-width: 576px)": { fontSize: "1.75rem" },
        }}
        align="center"
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Result;
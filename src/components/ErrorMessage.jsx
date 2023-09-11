import { Alert, Box } from '@mui/material';
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <Box>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default ErrorMessage;
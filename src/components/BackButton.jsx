import { Button } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    return (
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ color: "#546e7a" }}
      >
        Go Back
      </Button>
    );
};

export default BackButton;
import React from 'react';
import SearchForm from './SearchForm';
import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
      <Box
        className={"header"}
        component="header"
        sx={{ mb: "1.5rem", backgroundImage: "url('./bg.jpg')" }}
      >
        <Box sx={{ py: "3rem" }}>
          <Typography
            align="center"
            sx={{
              mb: "3.5rem",
              color: "#fff",
              "@media (max-width: 576px)": { fontSize: "2rem" },
            }}
            variant="h3"
            component="h1"
          >
            Books Searching App
          </Typography>
          <SearchForm />
        </Box>
      </Box>
    );
};

export default Header;
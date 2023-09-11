import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ value, onChange }) => {
    return (
      <TextField
        label="Enter your Books search query"
        value={value}
        onChange={onChange}
        sx={{ width: "100%", background: '#fff' }}
        variant='filled'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
};

export default Search;
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const Filter = ({ title, value, onChange, options }) => {
    return (
      <FormControl variant="filled" sx={{background: '#fff'}} fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select value={value} label={title} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
};

export default Filter;
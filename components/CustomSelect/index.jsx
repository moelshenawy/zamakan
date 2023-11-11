import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const CustomSelect = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (value) => {
    // Handle the selected option as needed
    console.log(`Selected option: ${value}`);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Open Select
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: 200,
            position: 'fixed',
            top: 60, // Adjust this based on your layout
          },
        }}
      >
        <MenuItem onClick={() => handleOptionClick('Option 1')}>Option 1</MenuItem>
        <MenuItem onClick={() => handleOptionClick('Option 2')}>Option 2</MenuItem>
        <MenuItem onClick={() => handleOptionClick('Option 3')}>Option 3</MenuItem>
      </Menu>
    </div>
  );
};

export default CustomSelect;

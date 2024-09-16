import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('borrow');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& .MuiToggleButton-root': {
          color: '#0f3d23', // Text color
          borderColor: '#0f3d23', // Border color
          fontWeight:'bold',
          paddingX:10,
          '&.Mui-selected': {
            backgroundColor: '#d9f8e6', // Background color when selected
          },
        },
      }}
    >
      <ToggleButton value="borrow">Borrow Cash</ToggleButton>
      <ToggleButton value="transact">Transact</ToggleButton>
      <ToggleButton value="deposit">Deposit Cash</ToggleButton>
    </ToggleButtonGroup>
  );
}
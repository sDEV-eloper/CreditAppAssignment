import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Modal, TextField, Checkbox, FormControlLabel, FormLabel } from '@mui/material';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import axios from 'axios';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px', // Increased width for two-column layout
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh', // Limit modal height
  overflow: 'auto', // Make it scrollable when content exceeds the height
};

const DeficitCard = () => {
  const [open, setOpen] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    loanTenure: '',
    employmentStatus: '',
    employmentAddress: '',
    reasonForLoan: '',
    consent: false,
  });

  // Handle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (formData.consent) {
      try {
        const response = await axios.post('/api/loans', formData,
           {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log("loan data---",response.data);
        alert('Loan Application Submitted!');
        handleClose();
      } catch (error) {
        console.error('Error submitting loan application', error);
      }
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      sx={{ 
        width: '50%', 
        margin: '0 auto' // Centers the Box horizontally
      }}
    >
      {/* Deficit Box */}
      <Card sx={{ display: 'flex', alignItems: 'center', width: '200px', p: 1, boxShadow: 'none', background: '#e5e5e5' }}>
        <Box
          sx={{
            backgroundColor: '#4CAF50', // Green color for the background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px',
            borderRadius: 2,
          }}
        >
          <MoneyIcon style={{ color: 'white', fontSize: '30px' }} />
        </Box>

        <CardContent sx={{ paddingLeft: 2 }}>
          <Typography variant="caption" color="textSecondary" gutterBottom>
            DEFICIT
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            ₦ 0.0
          </Typography>
        </CardContent>
      </Card>

      {/* Get A Loan Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#97a2a8', // Greyish button color
          color: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#717b81',
          },
        }}
        onClick={handleOpen}  // Open modal on click
      >
        Get A Loan
      </Button>

      {/* Loan Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Apply for a Loan
          </Typography>

          {/* Input Sections */}
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
              {/* Left Side Inputs */}
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
              />
              {/* Right Side Inputs */}
              <TextField
                label="Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                fullWidth
              />
            </Box>

            <Box display="flex" gap={2}>
              {/* Left Side Inputs */}
      
              <TextField
                label="Loan Tenure (in months)"
                name="loanTenure"
                value={formData.loanTenure}
                onChange={handleChange}
                fullWidth
              />
              {/* Right Side Inputs */}
              <TextField
                label="Employment Status"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                fullWidth
              />
            </Box>

            <Box display="flex" gap={2}>
              {/* Left Side Inputs */}
              <TextField
                label="Employment Address"
                name="employmentAddress"
                value={formData.employmentAddress}
                onChange={handleChange}
                fullWidth
              />
              {/* Right Side Inputs */}
              <TextField
                label="Reason for Loan"
                name="reasonForLoan"
                value={formData.reasonForLoan}
                onChange={handleChange}
                fullWidth
              />
            </Box>
         

            {/* Checkbox and Submit Button */}
            <FormControlLabel
              control={<Checkbox checked={formData.consent} onChange={handleCheckboxChange} />}
              label="I have read the important information and accept that by completing the application I will be bound by the terms "
            />
            <FormControlLabel
              control={<Checkbox checked={formData.consent} onChange={handleCheckboxChange} />}
              label="Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies. "
            />
            <Button variant="contained"  onClick={handleSubmit} sx={{backgroundColor:'#2d6847' }} >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeficitCard;

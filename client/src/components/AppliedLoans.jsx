import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Paper } from '@mui/material';
import { LongMenu } from './LongMenu';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

// Function to return appropriate chip color based on status
const getStatusChip = (status) => {
  switch (status) {
    case 'Pending':
      return <Chip label="Pending" color="warning" />;
    case 'Verified':
      return <Chip label="Verified" color="success" />;
    case 'Rejected':
      return <Chip label="Rejected" color="error" />;
    case 'Approved':
      return <Chip label="Approved" color="primary" />;
    default:
      return <Chip label={status} />;
  }
};

// Function to format date and time
const formatDateTime = (isoDateTime) => {
  try {
    const date = parseISO(isoDateTime);

    const formattedDate = format(date, 'MMM d, yyyy');
    const formattedTime = format(date, 'h:mm a');
    console.log("formdate", formattedTime, formattedDate)

    return { formattedDate, formattedTime };
  } catch (error) {
    console.error('Date parsing error:', error);
    return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Time' };
  }
};

const AppliedLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        const response = await axios.get('/api/loans', {
          headers: {
            Authorization: `Bearer ${token}`, // Passing JWT token in Authorization header
          },
        });
        console.log("response==", response);
        setLoans(response.data);
      } catch (err) {
        console.error('Failed to fetch loans:', err.message);
      }
    };

    fetchLoans();
  }, []); // Runs once when component mounts

  const handleEdit = (loanId) => {
    console.log(`Edit loan with ID: ${loanId}`);
  };

  const handleDelete = async (loanId) => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      await axios.delete(`/api/loans/${loanId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Passing JWT token in Authorization header
        },
      });
      // Remove the deleted loan from the state
      setLoans(loans.filter((loan) => loan._id !== loanId));
      console.log(`Deleted loan with ID: ${loanId}`);
    } catch (err) {
      console.error('Failed to delete loan:', err.message);
    }
  };

  return (
    <Box p={3} sx={{ backgroundColor: 'white', width: '80%', margin: "0 auto", height: '100vh' }}>
      <Typography variant="h6" gutterBottom>
        Applied Loans
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan Officer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date Applied</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => {
              const { formattedDate, formattedTime } = formatDateTime(loan.createdAt); // Assuming loan.dateTime contains the ISO date-time string

              return (
                <TableRow key={loan._id}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={loan.officer} src="/john-okoh.jpg" />
                      <Box ml={2}>
                        <Typography variant="body1">{loan.officer}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Updated 1 day ago
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{loan.amount}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Not Debt Yet
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{formattedDate}</Typography>
                    <Typography variant="body2" color="textSecondary">
                    {formattedTime}
                    </Typography>
                  </TableCell>
                  <TableCell>{getStatusChip(loan.status)}</TableCell>
                  <TableCell sx={{ width: "40px" }}>
                  <LongMenu loanId={loan._id} onEdit={() => handleEdit(loan._id)} onDelete={() => handleDelete(loan._id)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppliedLoans;

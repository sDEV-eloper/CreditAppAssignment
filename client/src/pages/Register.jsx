import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel, FormLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('user'); // Default to 'user'
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle role change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password, role })
      });

      const data = await res.json();
      if (data.token) {
        navigate('/login');
      } else {
        // Handle errors or registration failure
        console.error('Registration failed:', data.message);
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Register as {role === 'user' ? 'User' : 'Admin'}
      </Typography>
      <FormControl fullWidth margin="normal">
        <FormLabel>Role</FormLabel>
        <Select value={role} onChange={handleRoleChange} sx={{backgroundColor:'#caf3dc'}}>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, backgroundColor:'#2d6847'  }}>
          Register
        </Button>
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'green' }}>
            Login
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Register;

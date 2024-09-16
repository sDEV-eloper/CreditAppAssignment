import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Select, FormControl,  FormLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [role, setRole] = useState('user'); // Default to 'user'
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
  
      const data = await res.json();
      console.log('Login response:', data);
  
      if (data.token) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('token', data.token);
  
        // Redirect based on the role
        if (data.role === 'admin') {
          console.log('Redirecting to /admin');
          navigate('/admin');
        } else if (data.role === 'user') {
          console.log('Redirecting to /user');
          navigate('/user');
        }
        window.location.reload()
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };
  

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
    
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
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
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, backgroundColor:'#2d6847' }}>
          Login
        </Button>
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <Link to="/register" style={{ color: 'green' }}>
            Register
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;

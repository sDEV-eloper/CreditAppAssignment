const express = require('express');
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const loanRoutes= require('./routes/loanRoutes');

const cookieParser = require('cookie-parser');


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api', loanRoutes);


const PORT = process.env.PORT || 3001;
// MongoDB connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));


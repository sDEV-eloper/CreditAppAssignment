const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust path as necessary

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // No token

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedUser) => {
    if (err) return res.sendStatus(403); // Token invalid

    try {
      // Fetch user details from the database
      const user = await User.findById(decodedUser.id);
      if (!user) return res.sendStatus(404); // User not found

      req.user = user; // Attach user to request
      next();
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  });
};

module.exports = authenticateToken;

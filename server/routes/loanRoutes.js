const express = require('express');
const { submitLoanApplication, getAllLoans, getUserLoans, updateLoanStatus, deleteLoan} = require('../controllers/loanController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to submit loan application
router.post('/loans',authenticateToken, submitLoanApplication);

// Route for admin to get all loan applications
router.get('/loans', authenticateToken, getUserLoans);
router.get('/admin/loans', authenticateToken, getAllLoans);



// Route for admin to update loan status (approve/fail)
router.put('/loans/:id/status', updateLoanStatus);

router.delete('/loans/:id',  deleteLoan);


module.exports = router;

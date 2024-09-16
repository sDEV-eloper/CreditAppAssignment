const Loan = require('../models/loanModel.js');

// Handle loan application submission
exports.submitLoanApplication = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    
    const loan = new Loan({
      ...req.body,
      userId: req.user._id
    });
    await loan.save();
    res.status(201).json({ message: 'Loan application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting loan application', error });
  }
};

// Fetch all loan applications for admin
exports.getAllLoans = async (req, res) => {
  try {
    if (req.user.role !== 'admin') { // Check if the user is an admin
      return res.status(403).json({ message: 'Access denied' });
    }
    const loans = await Loan.find(); // Admin can see all loans
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan applications', error });
  }
};

// Get User Loans
exports.getUserLoans = async (req, res) => {
  console.log(req.user); // Should print user details
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    
    const loans = await Loan.find({ userId: req.user._id }); // Get loans specific to the logged-in user
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan applications', error });
  }
};

// Update loan application status (Approve/Fail)
exports.updateLoanStatus = async (req, res) => {
  try {
    if (req.user.role !== 'admin') { // Check if the user is an admin
      return res.status(403).json({ message: 'Access denied' });
    }
    const { loanId, status } = req.body; // The status should be 'approved' or 'rejected'
    const loan = await Loan.findByIdAndUpdate(loanId, { status }, { new: true });
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json({ message: 'Loan status updated', loan });
  } catch (error) {
    res.status(500).json({ message: 'Error updating loan status', error });
  }
};


// Delete a loan application
exports.deleteLoan = async (req, res) => {
  try {
    if (req.user.role !== 'admin') { // Check if the user is an admin
      return res.status(403).json({ message: 'Access denied' });
    }
    console.log("idddddd", req.params.id)
    const loan = await Loan.findByIdAndDelete(req.params.id);

    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json({ message: 'Loan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting loan', error });
  }
};
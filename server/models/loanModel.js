const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  amount: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  reasonForLoan: { type: String, required: true },
  consent: { type: Boolean, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Failed'], // Loan status options
    default: 'Pending', // Default status
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Loan', loanSchema);

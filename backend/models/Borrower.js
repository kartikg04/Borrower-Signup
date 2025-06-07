const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  residenceType: String,
  monthlyIncome: Number,
  previousLoan: String,
  maritalStatus: String,
  numberOfDependency: Number,
  city: String,
  state: String,
});

module.exports = mongoose.model('Borrower', borrowerSchema);

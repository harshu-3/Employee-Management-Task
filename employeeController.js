const Employee = require('../models/employeeModel');

exports.addEmployee = (req, res) => {
  const { name, employeeID, email, phoneNumber, department, dateOfJoining, role } = req.body;

  // Check for duplicate employee
  Employee.findByEmailOrID(email, employeeID, (err, results) => {
    if (err) return res.status(500).send('Database error.');
    if (results.length > 0) {
      return res.status(400).json({ message: 'Employee ID or Email already exists.' });
    }

    const newEmployee = { name, employeeID, email, phoneNumber, department, dateOfJoining, role };
    Employee.create(newEmployee, (err) => {
      if (err) return res.status(500).send('Error saving employee.');
      res.status(201).json({ message: 'Employee added successfully!' });
    });
  });
};

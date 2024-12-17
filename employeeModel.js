const db = require('../db');

const Employee = {
  create: (employeeData, callback) => {
    const query = 'INSERT INTO employees SET ?';
    db.query(query, employeeData, callback);
  },

  findByEmailOrID: (email, employeeID, callback) => {
    const query = 'SELECT * FROM employees WHERE email = ? OR employeeID = ?';
    db.query(query, [email, employeeID], callback);
  }
};

module.exports = Employee;

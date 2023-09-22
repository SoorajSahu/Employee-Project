const sqlite3 = require('sqlite3').verbose();
const Employee = require('../models/Employee');

const db = new sqlite3.Database('./employee.db');

db.run(`
  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    department TEXT
  )
`);


const allEmployees = (req, res) => {
  db.all('SELECT * FROM employees', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ employees: rows });
  });
};

const singleEmployee = (req, res) => {
  db.get(`SELECT * FROM employees where id = ?`,[req.params.id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ employees: rows });
  });
};


const updateEmployeeById = (req, res) => {
  let id = req.params.id;
  let updatedEmployee = req.body;
  let query = `UPDATE employees  SET name = ?, age = ?, department = ?  WHERE id = ?`
  db.run(query, [updatedEmployee.name, updatedEmployee.age, updatedEmployee.department, id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Employee updated successfully' });
    }
  );
};

const createEmployee = (req, res) => {
  let updatedEmployee = req.body;
  let query = `INSERT INTO employees (name, age, department) VALUES (?, ?, ?)`
  db.run(query, [updatedEmployee.name, updatedEmployee.age, updatedEmployee.department],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Employee Added successfully' });
    }
  );
};


const deleteEmployeeById = (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM employees WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Employee deleted successfully' });
  });
};

module.exports = {
  allEmployees,
  updateEmployeeById,
  deleteEmployeeById,
  singleEmployee,
  createEmployee
};

const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', employeeController.allEmployees)
router.get('/employees/:id', employeeController.singleEmployee)
router.put('/employees/:id', employeeController.updateEmployeeById)
router.post('/employees', employeeController.createEmployee)
router.delete('/employees/:id', employeeController.deleteEmployeeById)


module.exports = router;
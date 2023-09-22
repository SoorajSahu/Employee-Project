# Employee Project

Install Packages

`npm i`
Run Project 

`npm start`

Install Thunderclient Externsion  and use `thunder-collection_employee.json` for api calls

---

## API Endpoints

1. **Get All Employees**
   - Endpoint: `GET /employees`
   - Description: Retrieve a list of all employees.
   - Controller Function: `employeeController.allEmployees`

2. **Get Single Employee**
   - Endpoint: `GET /employees/:id`
   - Description: Retrieve information about a single employee by their ID.
   - Controller Function: `employeeController.singleEmployee`

3. **Update Employee by ID**
   - Endpoint: `PUT /employees/:id`
   - Description: Update employee information by specifying their ID.
   - Controller Function: `employeeController.updateEmployeeById`

4. **Create New Employee**
   - Endpoint: `POST /employees`
   - Description: Create a new employee record.
   - Controller Function: `employeeController.createEmployee`

5. **Delete Employee by ID**
   - Endpoint: `DELETE /employees/:id`
   - Description: Delete an employee record by specifying their ID.
   - Controller Function: `employeeController.deleteEmployeeById`


import React from 'react'
import EmployeeForm from './EmployeeForm'

const Employees = ({ employees }) => {
  return (
    <div>
      <center><h1>Employee List</h1></center>

      <EmployeeForm />

      {employees.map((employee) => (
        <div className="card" key={employee.id}>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">ID #{employee.id}</h6>
            <p className="card-text">{employee.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Employees
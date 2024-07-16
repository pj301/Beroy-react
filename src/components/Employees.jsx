// src/Employees.jsx
import React from "react";
import Employee from "./Employee.jsx";
import "../assets/Employees.css";

export default function Employees({ employees }) {
  return (
    <div className="container">
      <div>
        <h2>Employee Record</h2>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Employee Names</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <Employee key={index} employee={employee} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

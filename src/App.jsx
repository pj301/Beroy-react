// src/App.jsx
import React from "react";
import Employees from "./components/Employees.jsx";

const employeeData = [
  { name: "Beroy", position: "Manager", salary: 40000, status: "Active" },
  { name: "Cano", position: "Manager", salary: 40000, status: "Active" },
  { name: "Ortega", position: "Manager", salary: 40000, status: "Active" },
  { name: "Lawas", position: "Developer", salary: 30000, status: "Active" },
  { name: "Sawal", position: "Designer", salary: null, status: "Not Active" },
  { name: "Dagol", position: "Designer", salary: 25000, status: "Active" },
  { name: "Bagol", position: "Developer", salary: 30000, status: "Active" },
  { name: "Bustamante", position: "Designer", salary: 25000, status: "Active" },
  { name: "Cuberos", position: "Developer", salary: 30000, status: "Active" },
  { name: "James", position: "Developer", salary: null, status: "Not Active" },
];

export default function App() {
  return (
    <div>
      <Employees employees={employeeData} />
    </div>
  );
}

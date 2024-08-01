import React, { useState } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "../assets/Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      description: "Five Professional Judges",
      assignee: "John",
      deadline: "2024-08-31",
      status: "Pending",
    },
    {
      description: "Create Program Script",
      assignee: "Jane",
      deadline: "2024-08-05",
      status: "Pending",
    },
    {
      description: "Create Intro Video",
      assignee: "Mike",
      deadline: "2024-08-10",
      status: "Pending",
    },
    {
      description: "Design Stage Layout",
      assignee: "Mike",
      deadline: "2024-08-21",
      status: "Pending",
    },
    {
      description: "Prepare Dancers Costume",
      assignee: "Jane",
      deadline: "",
      status: "Completed",
    },
    {
      description: "Dancers Props",
      assignee: "Lisa",
      deadline: "",
      status: "Completed",
    },
    {
      description: "Dancers Profile",
      assignee: "Lisa",
      deadline: "",
      status: "Completed",
    },
    {
      description: "Event Venue",
      assignee: "Lisa",
      deadline: "2024-08-03",
      status: "Pending",
    },
    {
      description: "Certificates for the Judges",
      assignee: "Mike",
      deadline: "2024-08-27",
      status: "Pending",
    },
    {
      description: "Sponsorship",
      assignee: "John",
      deadline: "",
      status: "Completed",
    },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(
        (task) =>
          task.description.toLowerCase().includes(query.toLowerCase()) ||
          task.assignee.toLowerCase().includes(query.toLowerCase()) ||
          task.status.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  };

  const toggleStatus = (index) => {
    const updatedTasks = filteredTasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "Pending" ? "Completed" : "Pending",
        };
      }
      return task;
    });

    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <h1>Task Manager</h1>
      <SearchFilter onSearch={handleSearch} />
      <ul className="task-list">
        <li className="task-header">
          <span className="task-index">No.</span>
          <span className="task-description">Task Description</span>
          <span className="task-assignee">Assignee</span>
          <span className="task-deadline">Deadline</span>
          <span className="task-status">Status</span>
          <span className="task-action">Action</span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

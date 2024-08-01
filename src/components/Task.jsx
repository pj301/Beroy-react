import React from "react";
import "../assets/Task.css";

const Task = ({ task, index, toggleStatus }) => {
  return (
    <li className="task-item">
      <span className="task-index">{index + 1}.</span>
      <span className="task-description">{task.description}</span>
      <span className="task-assignee">{task.assignee}</span>
      <span className="task-deadline">
        {task.status === "Completed" ? "-" : task.deadline}
      </span>
      <span className="task-status">{task.status}</span>
      <button onClick={toggleStatus}>Toggle Status</button>
    </li>
  );
};

export default Task;
/* beroy */

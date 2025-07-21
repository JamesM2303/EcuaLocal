import React from "react";

function TaskItem({ task, toggleTask }) {
  return (
    <li
      onClick={() => toggleTask(task.id)}
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      {task.text}
    </li>
  );
}

export default TaskItem;

import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ name, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt=""></img> {name}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              title={task.task}
              tags={task.tags}
              key={index}
              handleDelete={handleDelete}
              index={index}
            ></TaskCard>
          )
      )}
    </section>
  );
};

export default TaskColumn;

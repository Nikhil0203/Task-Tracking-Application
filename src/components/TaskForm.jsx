import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      settaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      settaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handlechange = (e) => {
    // console.log("values", e.target.value, e.target.name);
    settaskData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("e", e.target.value);
    // console.log("taskData submit", taskData);
    setTasks((prev) => {
      // console.log("prev", prev);
      // console.log("taskdata inside", taskData);
      return [...prev, taskData];
    });
    settaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  // const [task, settask] = useState("");
  // const [status, setstatus] = useState("todo");
  // const handletaskchange = (e) => {
  //   settask(e.target.value);
  // };
  // const handlestatuschange = (e) => {
  //   setstatus(e.target.value);
  // };
  // console.log(status);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handlechange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              name="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag
              name="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              name="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handlechange}
            >
              <option value="todo">To do</option>
              <option value="done">Done</option>
              <option value="doing">Doing</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

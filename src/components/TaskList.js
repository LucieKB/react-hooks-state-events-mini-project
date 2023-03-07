import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const taskList = tasks.map((taskObj) => (
    <Task 
    key = {taskObj.text} 
    text = {taskObj.text} 
    category= {taskObj.category}
    onDeleteTask = {onDeleteTask}
    />
  ));
  return (
    <div className="tasks">{taskList}</div>
  );
}

export default TaskList;



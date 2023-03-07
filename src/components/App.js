import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState (TASKS);
  const [category, setCategory] = useState ("All");


  function addTask(newTask){
  setTasks ([...tasks, newTask]);
  }

  const filterTask = tasks.filter((taskChecked)=>{
    if (category === "All") return true;
    return taskChecked.category === category
    })

  function handleDeleteTask(deletedTask){
    setTasks(tasks.filter((task)=>task.text !== deletedTask));
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} selectedCategory={category}/>
      <NewTaskForm categories={CATEGORIES.filter((cat)=> cat !== "All")} onTaskFormSubmit={addTask}/>
      <TaskList tasks={filterTask} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}


export default App;

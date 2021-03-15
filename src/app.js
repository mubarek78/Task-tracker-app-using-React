import React, {useState} from "react";
import addTask from "./component/addTask";
import Header from './component/Header';
import Tasks from './component/tasks';
import AddTask from './component/addTask';
function App() {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 0,
            task: 'Coding',
            day: '03/11/19 7:30AM',
            reminder: false
        },
        {
            id: 1,
            task: 'Checking Email',
            day: '03/11/19 9:00AM',
            reminder: false
        },
        {
            id: 2,
            task: 'Playing With Friends',
            day: '03/11/19 3:50 PM',
            reminder: true
        }
    ])

//delete task
const deleteTask = (id) =>{
    const filtered = tasks.filter((task) => id !== task.id)
    setTasks(filtered)
}

// toggle remainder not finished
const toggleRemider = (id) => {
    console.log(id)
}

// Add Task
const addTask = (task) =>{
    const id = tasks.length;
    const newtask = {id, ...task}
    setTasks((prevValue) => [...prevValue, newtask])
} 

//show add task
const hshowAddTask = () => {
    setShowAddTask((prevValue) => !prevValue)
}

  return (
    <div className = 'container'>
      <Header title = 'Task Tracker' Click={hshowAddTask} color = {showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask}/>}   
     {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemider} onDelete={deleteTask}/>: 'No tasks to show'} 
    </div>
  );
 
}

export default App;

import React from 'react';
import Task from './Task'


 const Tasks = (props) => {
    return (   
      props.tasks.map((task) => {
         return  <Task task = {task} onToggle={props.onToggle} onDelete={props.onDelete} />
      })      
    )
    
}

export default Tasks;
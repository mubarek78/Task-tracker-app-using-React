import React from 'react';
import {FaTimes} from 'react-icons/fa'



 const Task = (props) => {

const handleToggle = () => {
    return props.onToggle(props.task.id)
}

    return (  
        <div className="task" onDoubleClick={handleToggle}>
        <h2 >{props.task.id} {props.task.task}   <FaTimes style={{color: 'red', curser: 'pointer'}} onClick={() => props.onDelete(props.task.id)} /></h2>
        <p>{props.task.day}</p>
        </div> 
    );
      }      
    


export default Task;
import React, {useState} from 'react';



 const AddTask = (props) => {
   const [task, setText] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)

//    const [form, setForm] = useState({text: '', day: "", reminder: false})

//    const handleForm = (event) => {
//       var  value = event.target.value;
//       var  name = event.target.name;
//    }
  

  const  handleDay = (event) => {  
        setDay(event.target.value);
    }

    const  handleCheckBox = (event) => {
        setReminder(event.target.checked);
    }

    const  onSubmit = (event) => {
        event.preventDefault()
        
       props.onAdd({task, day, reminder})

       setText('')
       setDay('')
       setReminder(false)
    }

    return (   
       <form className='add-form'>
           <div className='form-control'>
               <label>Task</label>
               <input onChange={(e) => {
        setText(e.target.value);
    }} type='text' name="task" placeholder="Add Task" 
        value = {task}
    />
           </div>
           <div className='form-control'>
               <label>Day & Time</label>
               <input onChange={handleDay} name="day" type='text' value={day} placeholder="Add Day & Time" />
           </div>
           <div className='form-control form-control-check'>
               <label>set Reminder</label>
               <input onChange={handleCheckBox} type='checkbox' value={reminder} checked={reminder} />
           </div>
           <input onClick={onSubmit}  className='btn btn-block' type='submit' name='checkbox' value="Save Task" />
       </form>
      );      
    
}

export default AddTask;
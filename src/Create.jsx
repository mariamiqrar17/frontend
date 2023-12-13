import React, {useState} from 'react'
import axios from 'axios'



function Create() {
  const [task, setTask] = useState()
  const handleAdd =() => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (

        <div class='home'>
          <h2 class='heading'>Todo List</h2>
          <div class= 'create_form'>
            <input type="text" name="" id="" placeholder='Enter the Task' onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
          </div>          
        </div>

  )
}

export default Create
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import Create from './Create';

function Home() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //  axios.get('https://backend-self-xi.vercel.app/todo/get-todo')
  //     .then(result => setTodos(result.data))
  //     console.log(result)
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(()=>{
    getData()

  },[])
  let getData = async() =>{
    let a = await axios.get('https://backend-self-xi.vercel.app/todo/get-todo')
    setTodos(a.data.Todo)
    console.log(a.data.Todo)
  }

  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err));
  }


  return (
    <div className='maintask' >
      <Create />
      {todos.length === 0 ?
        <div> </div> :
        todos.map((todo, index) => (
          <div className='task' key={index}>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
              {todo.done ?
                <BsFillCheckCircleFill className='icon' > </BsFillCheckCircleFill> :
               <BsCircleFill className='icon' />
              }
              <p className= {todo.done ? "line_through": ""}>{todo.todo}</p>
            </div>
            <div>
              <span><BsFillTrashFill className='icon' 
              onClick={() => handleDelete(todo._id)} /></span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Home;

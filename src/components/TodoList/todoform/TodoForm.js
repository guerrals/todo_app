import React, { useState } from 'react'
import './TodoForm.css'
import { IconButton } from '@material-ui/core';
import { IoMdAdd } from 'react-icons/io';
import firebase from 'firebase/app'


function TodoForm({todosRef})  {
    const [title, setTitle] = useState('')
    const submitTodo = async(e) => {
      e.preventDefault()
      await todosRef.add({
        id: "",
        title: title,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        completed: false
      })
        
      setTitle('')
    }
        

    
    return (
      <div className='input-box'>
        <IconButton onClick={submitTodo}><IoMdAdd/></IconButton>
        <input 
          value={title} 
          placeholder="Adicionar novo item" 
          onChange={e => setTitle(e.target.value)
          }>
        </input>
      </div>
    )
}

export default TodoForm

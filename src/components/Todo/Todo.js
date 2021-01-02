import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import firestore from '../../services/firebase.js'
import ListContext from '../../context'

// style
import './Todo.css'

// ícones
import {GrDrag} from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { IconButton } from '@material-ui/core';


const todosRef = firestore().collection('todos');
const todosCheckRef = firestore().collection('checkedTodos')


function Todo({ data, index }) {
    const ref = useRef()
    const { title, completed, id } = data
    const { move } = useContext(ListContext)
    
    const completeTodo = completed ? () => {
      todosRef.doc(id).set(data)
      todosRef.doc(id).update({ 'completed': !completed })
      todosCheckRef.doc(id).delete()
    } : () => {
      todosCheckRef.doc(id).set(data)
      todosCheckRef.doc(id).update({ 'completed': !completed })
      todosRef.doc(id).delete()
    }
    const deleteTodo = completed ? () => {
      todosCheckRef.doc(id).delete()
    } : () => {
      todosRef.doc(id).delete()
    }
  
    const [{isDragging}, dragRef] = useDrag({
      item: {type: 'TODO', index},
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      })
    })
  
    const [, dropRef] = useDrop({
      accept: 'TODO',
      hover(item, monitor) {
        const draggedIndex = item.index
        const targetIndex = index
  
        if (draggedIndex === targetIndex) {
          return;
        }
  
        const targetSize = ref.current.getBoundingClientRect()
        const targetCenter = (targetSize.bottom - targetSize.top) / 2
  
        const draggedOffSet = monitor.getClientOffset()
        const draggedTop = draggedOffSet.y - targetSize.top
  
        if (draggedIndex < targetIndex && draggedTop < targetCenter) {
          return;
        }
  
        if (draggedIndex > targetIndex && draggedTop > targetCenter) {
          return
        }
        move(draggedIndex, targetIndex)
  
        item.index = targetIndex
      }
    })
  
  dragRef(dropRef(ref))

  
    return <div className={ isDragging ? "todo-dragging" : "todo" } ref={ref} >
      <GrDrag className={ isDragging ? 'dragging' : ''}/>
      <div type='checkbox' checked={completed} onClick={completeTodo} className={isDragging ? 'dragging' : completed ? 'checkbox-checked' : 'checkbox'}>{completed  && (<span>&#x2714;</span>) }</div>
        <div className={isDragging ? 'dragging' : completed ? 'line-through' : 'item-text'}>{title}</div>
      <IconButton onClick={deleteTodo} className={isDragging ? 'dragging' : ''}><IoMdClose/></IconButton>
    </div>
  }
  
export default Todo

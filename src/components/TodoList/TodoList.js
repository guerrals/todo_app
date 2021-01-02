import React, { useState, useEffect } from "react";
import ListContext from "../../context";
import produce from "immer";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList({ todosRef }) {
  const [orderedTodos, setOrderedTodos] = useState([]);

  function move(from, to) {
    setOrderedTodos(
      produce(orderedTodos, (draft) => {
        const dragged = draft[from];
        draft.splice(from, 1);
        draft.splice(to, 0, dragged);
      })
    );
  }

  useEffect(() => {
    todosRef.orderBy("createdAt").onSnapshot((snapshot) => {
      setOrderedTodos(
        snapshot.docs.map((doc) => {
          const todo = {
            id: doc.id,
            title: doc.data().title,
            completed: doc.data().completed,
            createdAt: doc.data().createdAt,
          };
          return todo;
        })
      );
    });
  }, []);

  return (
    <>
      <ListContext.Provider value={{ orderedTodos, move }}>
        <div className="todo-list">
          {orderedTodos.map((todo, index) => {
            return <Todo key={todo.id} index={index} data={todo} />;
          })}
        </div>
      </ListContext.Provider>
    </>
  );
}

export default TodoList;

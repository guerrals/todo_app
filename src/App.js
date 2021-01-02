import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import { FiCheck } from "react-icons/fi";
import { DndProvider } from "react-dnd";
import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { HTML5Backend } from "react-dnd-html5-backend";
import firestore from "./services/firebase";

const todosRef = firestore().collection("todos");
const todosCheckRef = firestore().collection("checkedTodos");

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>To-do list</h1>
        <div className="todo-box">
          <TodoList todosRef={todosRef} />
          <TodoForm todosRef={todosRef} />
          <div className="itens-concluidos">
            <FiCheck size="2em" className="itens-concluidos-icon" />
            <h2>Itens concluídos</h2>
          </div>
          <TodoList todosRef={todosCheckRef} />
        </div>
      </div>
    </DndProvider>
  );
}
export default App;

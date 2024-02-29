import "../App.css";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";


function Todo() {
    const [todos, setTodos] = useState([]);

function addTodo(title) {
    setTodos((currentTodos) => {
     return [
        ...currentTodos,
     { id: crypto.randomUUID(), title, completed: false },
    ];
 });
}

function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
     return currentTodos.map((todo) => {
       if (todo.id === id) {
        return { ...todo, completed };
       }


       return todo;
     });
   });
}

function editTodo(id, Title){
  const NewTitle = prompt("Edit your current title: ", Title)
  if(NewTitle !== null) {
    setTodos((currentTodos) => {
      const updatedTodo = currentTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, title: NewTitle};
        }
        return todo;

      });
      return updatedTodo;
    });

  }
}

function deleteTodo(id) {
    setTodos((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
    });
 }
 
 return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default Todo;

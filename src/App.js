import React from 'react';
/* import TodoCounter from '../TodoCounter'; */
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton'
// import './App.css';
const todos = [
  {text: 'Lavar mi ropa', completed:true},
  {text: 'Tomar el curso de Intro a React', completed:false},
  {text: 'Sacar a mi perro', completed:false},
  {text: 'Estudiar Backend', completed:false},

];
function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
       
      <TodoSearch /> 
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed = {todo.completed}
          /> 
        ))}
      </TodoList>
     
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;

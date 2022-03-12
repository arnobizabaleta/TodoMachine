import React from 'react';
/* import TodoCounter from '../TodoCounter'; */
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton'
// import './App.css';
const defaultTodos = [
  {text: 'Lavar mi ropa', completed:true},
  {text: 'Tomar el curso de Intro a React', completed:true},
  {text: 'Sacar a mi perro', completed:false},
  {text: 'Estudiar Backend', completed:false},

];
function App(props) {
  
  const [todos,setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  /* todo.completed === true es lo mismo que !!todo.completed */
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    
    searchedTodos = todos.filter(todo => {
      //Pasando  el texto de cada TODO a minuscula
      const todoText = todo.text.toLowerCase();
      //Pasando  el inputText a minuscula
      const searchText = searchValue.toLowerCase();
      //Filtrando Todos de acuerdo al InputText
      return todoText.includes(searchText);
    });

  }

  return (
    <React.Fragment>
      <TodoCounter 
       total={totalTodos}
       completed={completedTodos}

      />
       
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
     
      
      /> 
      
      <TodoList>
        {searchedTodos.map(todo => (
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

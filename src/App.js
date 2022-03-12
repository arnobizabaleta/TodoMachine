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
  {text: 'Tomar el curso de Intro a React', completed:false},
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

  //Función para tachar el TODO completado una vez es detectado el evento click sobre
  // el icono check especificado en el modulo TodoItem;
  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos); //Actualizando nuestro estado de TODOs
    /* todos[todoIndex] = {
      text:todos[index].text,
      completed: true,
    }; */
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //(PosictionstartCut,numberCuts)
    newTodos.splice(todoIndex, 1);//Eliminando el Todo correspondiente al index encontrado
    setTodos(newTodos); //Actualizando nuestro estado de TODOs
    
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
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          /> 
        ))}
      </TodoList>
     
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;

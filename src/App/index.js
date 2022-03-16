import React from 'react';
import {AppUI} from './AppUI'
// import './App.css';
const defaultTodos = [
  {text: 'Lavar mi ropa', completed:true},
  {text: 'Tomar el curso de Intro a React', completed:false},
  {text: 'Sacar a mi perro', completed:false},
  {text: 'Estudiar Backend', completed:false},

]; 

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem =  localStorage.getItem("itemName");

  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem("itemName", JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item ,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem("itemName", stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}
function App() {
  
  const [todos,saveTodos] = useLocalStorage("TODOS_V1", []);
  
 
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
    saveTodos(newTodos); //Actualizando nuestro estado de TODOs
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
    saveTodos(newTodos); //Actualizando nuestro estado de TODOs
    
  }
   

  return (
    <AppUI 
    
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = { deleteTodo }

    />
  );
}

export default App;

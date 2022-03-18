import React from 'react';
// import {TodoContext} from "../TodoContext/index";
import {TodoProvider} from "../TodoContext/index";
import {AppUI} from './AppUI'
import './App.css';
/* const defaultTodos = [
  {text: 'Lavar mi ropa', completed:true},
  {text: 'Tomar el curso de Intro a React', completed:false},
  {text: 'Sacar a mi perro', completed:false},
  {text: 'Estudiar Backend', completed:false},

];  */


function App() {
  
  return (
    
    <TodoProvider>
      <AppUI />
    </TodoProvider>
   
    
  );
}

export default App;
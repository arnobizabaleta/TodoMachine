import React from 'react';
import {useLocalStorage} from './useLocalStorage';

//Custom Hook useTodos()
function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
      //Función para añadir TODO: Crear un objeto a nuestro lista de TODOs
      const addTodo = (text) => {
          const newTodos = [...todos];
          newTodos.push({
          completed:false,
          text:text
        });
        
        saveTodos(newTodos);//Actualizando nuestro estado de TODOs
      };
      //Función para tachar el TODO completado una vez es detectado el evento click sobre
      // el icono check especificado en el modulo TodoItem;
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);//Actualizando nuestro estado de TODOs
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        //(PosictionstartCut,numberCuts)
        newTodos.splice(todoIndex, 1);//Eliminando el Todo correspondiente al index encontrado
        saveTodos(newTodos);//Actualizando nuestro estado de TODOs
      };
      //Devolviendo Todas las propiedades guardadas en nuestro Custom Hook useTodos
      //como un objeto
      return {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal, 
        setOpenModal
        };
}



export { useTodos };
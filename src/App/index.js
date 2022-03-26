import React from 'react';
import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import './App.css';



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading = {loading}>
           
        <TodoCounter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
            // loading = {loading}

        />
       <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            // loading = {loading}
        /> 
        </TodoHeader>
      
        <TodoList
          error = {error}
          loading = {loading}
          searchedTodos = {searchedTodos}
          totalTodos = { totalTodos }
          searchText = {searchValue}
          onError = {() => <TodosError/>}
          onLoading = {() => <TodosLoading/>}
          onEmptyTodos = {() => <EmptyTodos/>}
          
          onEmptySearchResults = {
            (searchText) => <p>No hay resultados para {searchText}</p>
        
          }
          //  Render Prop      
       /*    render = {todo =>(
                      <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
          )} */
        
        >
        
      
        {/* Render function */}
        {todo =>(
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
        )}
      
      </TodoList>
        
      
         
      
        
          
      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo = {addTodo}
            setOpenModal = {setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
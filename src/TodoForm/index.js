import React from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue,setNewTodoValue ] = React.useState("");//Creando estado local
    const { 
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue( event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();//Cuando enviamos el form No recarga la página automaticamente 
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe tu nuevo To Do</label>
            <textarea 
                value = {newTodoValue}
                onChange = { onChange }
                placeholder = "Escribe tu nueva tarea pendiente"
            />

        <div className="TodoForm-buttonContainer TodoForm-button-cancel" >
            <button
                className="TodoForm-button "
                type="button"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                className="TodoForm-button TodoForm-button-add"
                type="submit"
                onClick={onSubmit}
            >
                Añadir
            </button>
        </div>
        </form>

        
    );
}

export {TodoForm};
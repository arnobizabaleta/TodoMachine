import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalTodos,completedTodos, loading} ){
    
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Todos</h2>
    );
}

/* export default TodoCounter; */
export {TodoCounter};
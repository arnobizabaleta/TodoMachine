import React from "react";
import "./CreateTodoButton.css";

const onclickButton = (msg) => {
    alert(msg);
};



function CreateTodoButton(){
    return (
        <button className="CreateTodoButton"
                onClick={() => {onclickButton("Mensaje a la vista")}}
        >
            +
        </button>
        
    );
}

/* export default TodoCounter; */
export {CreateTodoButton};
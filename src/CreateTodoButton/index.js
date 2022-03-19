import React from "react";
import "./CreateTodoButton.css";





function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal( prevState => !prevState);//Cambiando el estado del modal al hacer click en el botton +
    
    };
    return (
        <button className= "CreateTodoButton"
                onClick = { onClickButton }
        >
            +
        </button>
        
    );
}

/* export default TodoCounter; */
export {CreateTodoButton};
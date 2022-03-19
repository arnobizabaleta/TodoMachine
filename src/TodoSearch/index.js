import React from "react";
import { TodoContext} from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return (
        <input  className="TodoSearch" 
         placeholder="Cebolla"
         value={searchValue}
         onChange={onSearchValueChange}
        
        >
        
        </input>
        
    );
  /*   React para renderizar necesita hacerlo con todos nuestros componetentes en una 
    etiqueta, o bien sea, podemos enviarle un array para realizar el render */
}

/* export default TodoCounter; */
export {TodoSearch};
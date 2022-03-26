import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, loading}){
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return (
        <input  className="TodoSearch" 
         placeholder="Cebolla"
         value={searchValue}
         onChange={onSearchValueChange}
         disabled={loading}
        
        >
        
        </input>
        
    );
  /*   React para renderizar necesita hacerlo con todos nuestros componetentes en una 
    etiqueta, o bien sea, podemos enviarle un array para realizar el render */
}

/* export default TodoCounter; */
export {TodoSearch};
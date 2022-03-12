import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState("");

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return [
        <input  className="TodoSearch" 
         placeholder="Cebolla"
         value={searchValue}
         onChange={onSearchValueChange}
        
        >
        
        </input>,
        
        <p  >{searchValue}</p>
    ];
  /*   React para renderizar necesita hacerlo con todos nuestros componetentes en una 
    etiqueta, o bien sea, podemos enviarle un array para realizar el render */
}

/* export default TodoCounter; */
export {TodoSearch};
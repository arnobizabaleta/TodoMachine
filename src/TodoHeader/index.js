import React from "react";

function TodoHeader({children, loading}){
    //No importa si viene un elemento, o dos o null siempre nos devuelve un array
    return (
        <header>
            {
            React.Children
            .toArray(children)
            .map(child => React.cloneElement(child, {loading}))
            //Por cada child vamos a llamar a clone element.
            //React.cloneElement
            //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
                
            };
        </header>
    );
}

export { TodoHeader };
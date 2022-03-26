import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener("storage", (change) => {
            if(change.key === "TODOS_V1"){ //Si hubo camnios en TODOS_V1
                console.log("Hubo camnios en TODOS_V1")
                setStorageChange(true); //Actualizando estado de cambio en Storage
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }
        return (
            <WrappedComponent 
            show = { storageChange }
            toggleShow = { toggleShow }
            />
        );
    }
}

export { withStorageListener };
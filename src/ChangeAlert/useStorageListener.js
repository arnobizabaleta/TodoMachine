import React from "react";

function useStorageListener(sincronize){
    
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener("storage", (change) => {
            if(change.key === "TODOS_V1"){ //Si hubo camnios en TODOS_V1
                console.log("Hubo camnios en TODOS_V1")
                setStorageChange(true); //Actualizando estado de cambio en Storage
            }
        })

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        }
        return {
            show : storageChange,
            toggleShow
        };
             
            
            
        
    
}

export { useStorageListener };
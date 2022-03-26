import React from "react";

//Custom Hook propia para localStorage
function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true); //Sincronizados con todas las pestañas de nuestro navegador?
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);//Estamos sincronizados otra vez! Desasparece el mensaje de "Hubo cambios"
      } catch(error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);
  //Cada vez que haya un cambio en la sincronización de pestañas(Cuando llamamos a set)
  //Volvemos a ejecutar el useEfect y así voolver a entrar a local storage a cargar
  //nuestros elementos y demás info...
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);//Cuando sepamos que hubo en cambio entré el estado de carga
    setSincronizedItem(false);//Cmbiando el estado para volver a llamar useEffect
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
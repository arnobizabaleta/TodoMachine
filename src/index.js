import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
//import App from './App/index.js';

//WrappedComponent Is App
function App(props){
  return(
    <h1>¡{props.saludo}, {props.nombre}!</h1>
  );
}

function withSaludo(WrappedComponent){
  return function WrappedComponentWithSaludo(saludo) { //Función Intermedia
    return function componenteDeVerdad(props){
      return (
        <React.Fragment>
        <WrappedComponent {...props} saludo={saludo}/>
        <p>Estamos acompañando al componente WrappedComponent</p>
        </React.Fragment>
      );
    }
    
  }
   
  
}

const AppWithSaludo = withSaludo(App)("Hi");//Primer parametro(WrappedComponentName)
//Segundo parametro(Propiedad que se envia a través de la función intermedia)
// y es recibida y ejecuta por nuestro WrappedComonent App
ReactDOM.render(
  
  <AppWithSaludo  nombre = "Juanita" />,
    
 /*  Componente App Indentificado por su inicio en Mayuscula */
 
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


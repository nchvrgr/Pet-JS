import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";
import PropTypes from 'prop-types';
import logo from './logo.png';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales){ 
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales] );

  const crearCita = cita => {
    setCitas([...citas, cita]);
  }

  const eliminarCita = (id) => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas(newCitas);
  }

  return (
    <Fragment>
      <h1>       
      <img src={logo} alt="logo" width={40} className="logo"/> Pet JS
        
      </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <Citas citas={citas} eliminarCita={eliminarCita}/>
          </div>
        </div>
      </div>
      <footer>
        <span>Made by <a href="https://www.github.com/nchvrgr" target="_blank" rel="noreferrer">Nacho</a></span>
      </footer>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;

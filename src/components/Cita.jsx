import React from "react";
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const {dueño, fecha, hora, mascota, sintomas} = cita;
    return ( 
        <div className="cita">
            <p>  
                <b> Pet: </b> 
                <span> {mascota} </span>
            </p>
            <p>  
                <b> Owner: </b>
                <span> {dueño} </span>
            </p>
            <p>  
                <b> Date: </b>
                <span> {fecha} </span>
            </p>
            <p>  
                <b> Hour: </b>    
                <span> {hora} </span>   
            </p>
            <p>  
                <b> Pet description / symptoms: </b> 
                <span> {sintomas} </span>
            </p>
            
            <button className="button eliminar u-full-width" onClick={() => eliminarCita(cita.id)}>
                Remove &times;
            </button>

        </div>
     );
}
 
Cita.propTypes = {
    citas: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired

}

export default Cita;
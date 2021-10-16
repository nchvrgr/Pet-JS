import React from "react";
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const {dueño, fecha, hora, mascota, sintomas} = cita;
    return ( 
        <div className="cita">
            <p>  
                <b> Mascota: </b> 
                <span> {mascota} </span>
            </p>
            <p>  
                <b> Dueño: </b>
                <span> {dueño} </span>
            </p>
            <p>  
                <b> Fecha: </b>
                <span> {fecha} </span>
            </p>
            <p>  
                <b> Hora: </b>    
                <span> {hora} </span>   
            </p>
            <p>  
                <b> Síntomas: </b> 
                <span> {sintomas} </span>
            </p>
            
            <button className="button eliminar u-full-width" onClick={() => eliminarCita(cita.id)}>
                Eliminar &times;
            </button>

        </div>
     );
}
 
Cita.propTypes = {
    citas: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired

}

export default Cita;
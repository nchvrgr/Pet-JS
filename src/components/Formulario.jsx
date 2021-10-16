import React, { Fragment, useState } from 'react';
import { v4 as uuidv4} from 'uuid';

const Formulario = ({crearCita}) => {
    const [ cita, setCita ] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const submitCita = e => {
        e.preventDefault();
        if( mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return
        }
        setError(false);
        cita.id = uuidv4();
        crearCita(cita);
        setCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''          
        })
    }

    const { mascota, dueño, fecha, hora, sintomas } = cita;

    return (  
        <Fragment>
            <h2>Crear cita</h2>
            <form onSubmit={submitCita}>
                <label>Nombre de la mascota</label>
                <input type="text" name="mascota" className="u-full-width" 
                placeholder="Click aquí para escribir..." onChange={handleChange} value={mascota}/>

                <label>Nombre del dueño</label>
                <input type="text" name="dueño" className="u-full-width" 
                placeholder="Click aquí para escribir..." onChange={handleChange} value={dueño}/>

                <label>Fecha de la cita</label>
                <input type="date" name="fecha" className="u-full-width" 
                onChange={handleChange} value={fecha}/>

                
                <label>Horario de la cita</label>
                <input type="time" name="hora" className="u-full-width" 
                onChange={handleChange} value={hora}/>

                <label>Síntomas</label>
                <textarea className="u-full-width" name="sintomas" placeholder="Escribe aquí"
                onChange={handleChange} value={sintomas}/>

                {error ? <p className="alerta-error"> Faltan datos </p> : null}
                <button type="submit" className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;
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
            <h2>Create veterinary shift</h2>
            <form onSubmit={submitCita}>
                <label>Pet name</label>
                <input type="text" name="mascota" className="u-full-width" autoComplete={false} 
                placeholder="Type here" onChange={handleChange} value={mascota}/>

                <label>Owner name</label>
                <input type="text" name="dueño" className="u-full-width" autoComplete={false} 
                placeholder="Type here" onChange={handleChange} value={dueño}/>

                <label>Date of the shift</label>
                <input type="date" name="fecha" className="u-full-width" 
                onChange={handleChange} value={fecha}/>

                
                <label>Hour of the shift</label>
                <input type="time" name="hora" className="u-full-width" 
                onChange={handleChange} value={hora}/>

                <label>Pet description / symptoms</label>
                <textarea className="u-full-width" name="sintomas" placeholder="Type here"
                onChange={handleChange} value={sintomas}/>

                {error ? <p className="alerta-error"> Missing data </p> : null}
                <button type="submit" className="button agregar u-full-width button-primary">Create shift</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;
import React, { Fragment } from 'react';
import Cita from './Cita';

const Citas = ({citas, eliminarCita}) => {
    return ( 
        <Fragment>
            <h2>Mis citas</h2>
            {
            citas.length > 0 ? (
                citas.map(cita => (
                    <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita}/>
                ))
            ):
                <p className="aviso">Aún no hay ninguna cita programada</p>
            }
        </Fragment>
     );
}
 
export default Citas;
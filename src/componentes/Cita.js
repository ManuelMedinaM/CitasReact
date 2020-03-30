import React from 'react';

const Cita = ({cita ,eliminarCita}) => {

   const{mascota,id,propietario,fecha,hora,sintomas} = cita;

    return(<div className="media mt-3">
        <div className="media-body">
            <h3 className="nt-0">{mascota}</h3>
            <p className="card-text"><span>
                Nombre del dueño:
                </span>{propietario}</p>
            <p className="card-text"><span>
                Fecha:
            </span>{fecha}</p>
            <p className="card-text"><span>
                Hora:
            </span>{hora}</p>
            <p className="card-text"><span>
                Sintomas:
            </span></p>
            <p className="card-text">
            {sintomas} </p>
            <button onClick={()=>eliminarCita(id)} className="btn btn-danger">
                Borrar &times;
            </button>
        </div>
    </div>)
    };

export default Cita;
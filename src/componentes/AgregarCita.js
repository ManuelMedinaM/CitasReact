import uuid from 'uuid/v4';
import React, {useState} from 'react';

const AgregarCita = ({crearCita}) => {

    //crear state de citas;
    const [cita,setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false);


    //funcion que se ejecuta cunando escriben en el imùt

    const actualizarState = e=>{
         setCita({
             ... cita,
             [e.target.name]: e.target.value
         })
    }

    //extraer valores
    const {mascota,propietario, fecha, hora, sintomas} = cita;


    //cuando se envie

    const enviarNuevaCita = (e)=>{
        e.preventDefault();

        //validar

        if(mascota.trim() === '' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
            setError(true);
            return;
        }
        //asignar ID
        setError(false);
        cita.id= uuid();
        //crear la cita
        crearCita(cita);
        //reiniciar el form
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return (
        <div className="card mt-5">
        <div className="card-body">
             <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>

             { error ? <div className="alert alert-danger text-center">todos los campos son obligatorios</div>
             : null}

             <form onSubmit={enviarNuevaCita}>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                    <div className="col-sm-8 col-lg-10">
                        <input type="text" name="mascota" className="form-control" placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                    <div className="col-sm-8 col-lg-10">
                        <input type="text" name="propietario"className="form-control"  placeholder="Nombre Dueño de la Mascota"
                        onChange={actualizarState}
                        value={propietario}
                        />
                </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                        <input type="date" name="fecha" className="form-control" 
                         onChange={actualizarState}
                         value={fecha}
                         />
                    </div>                            

                    <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                    <div className="col-sm-8 col-lg-4">
                        <input type="time" name="hora" className="form-control"  
                         onChange={actualizarState}
                        value={hora}
                         />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea
                        name="sintomas"className="form-control"
                        onChange={actualizarState}
                        value={sintomas}
                        ></textarea>
                    </div>
                </div>

                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AgregarCita;
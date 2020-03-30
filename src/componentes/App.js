import React, {useState,useEffect} from 'react';
import '../css/index.css';
import Header from './Header';
import AgregarCita from './AgregarCita';
import Cita from './Cita';

const App = () => {

  const citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[];
  }

  const [citas, setCitas] = useState(citasIniciales)

//use efec para realizar funciones cuando el sate cambia
useEffect(()=>{
  if(citasIniciales){
    localStorage.setItem('citas',JSON.stringify(citas))
  }else{
    localStorage.setItem('citas',JSON.stringify([]))
  }
}, [citas]);

//funcion que tome las citas actualies y cree la nueva
const crearCita = cita =>{
  setCitas([
    ...citas,
    cita
  ])
}



//funcion que elimina una cita por su aid
const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita => cita.id!== id)

  setCitas(nuevasCitas);
}
  return (
    <div className="container">
        <Header
          titulo= {'Administrados de citas de paciente'}
        />
        <div className="row"> 
          <div className="col-md-6">
            <AgregarCita
              crearCita={crearCita}
            />
          </div>
          <div className="col-md-6">
          <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{citas.length===0 ? 'No hay citas' : 'Administra tus citas aqui'}</h2>
                    <div className="lista-citas">
                        {citas.map(cita=>(
                             <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                             />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
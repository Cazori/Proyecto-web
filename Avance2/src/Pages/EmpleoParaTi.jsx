import '../Estilos/Home.css';
import '../Estilos/Personas.css';
import React from 'react';
import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';

function App(){
  return(
    
    <div>
        <Nadvar/>
        <BTChat/>

        <div class='rectanguloContenedor'>
            
            <div class='rectanguloContenedor2'>

                <button className='ButtonSolicitar' href="#"> Solicitar</button>
            </div>

            <div className="EmpleoTi">
                    <h2>Empleos para ti</h2>
            </div>

            <div className="TrabajoPersona">
                    <h3>Remote Web Developer - React Jobs</h3>
            </div>

        </div>  
         

            <div className='HorasTrabajo'>
            <h4>8 Horas diarias</h4>
            </div>

            <div className='JornadaTrabajo'>
            <h4>Jornada completa</h4>
            </div>

            <div className='PaisCiudad'>
            <h4>Colombia - Cali</h4>
            </div>

            <div className='PagoTrabajo'>
            <h4>Salario: $2,500 USD</h4>
            </div>
   

    </div>
    
  );
}


export default App;
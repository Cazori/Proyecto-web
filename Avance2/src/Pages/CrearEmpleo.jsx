import '../Estilos/Home.css';
import '../Estilos/Personas.css';
import '../Estilos/InputsInformacionPerfiles.css';

import React from 'react';

import  BTChat  from '../Components/BTChat';
import  Nadvar  from '../Components/Nadvar';

import  BtnCargarFoto  from '../ComponentsCrearEmpleo/BtnCargarFoto';

import  Busqueda  from '../ComponentsCrearEmpleo/Busqueda';
import  HorasTrabajo  from '../ComponentsCrearEmpleo/HorasTrabajo';
import  Jornada  from '../ComponentsCrearEmpleo/Jornada';
import  Region  from '../ComponentsCrearEmpleo/Region';
import  Salario  from '../ComponentsCrearEmpleo/Salario';
import TextAreaEmpelo from '../Components/TextAreaEmpleo';

export const InputR = () => {

  return(
    
      <div>
        <Nadvar/>
        <BTChat/>
        
        <BtnCargarFoto/>

        <Busqueda/>
        <HorasTrabajo/>
        <Jornada/>
        <Region/>
        <Salario/>
        <TextAreaEmpelo/>


        <div className="PerfilDeXPersona">
                <h2>Crea un empleo</h2>
        </div>

        <button className='CrearEmpleo' href="#"> Publicar empleo</button>

      </div>
    
  );
}

export default InputR;
import '../Estilos/personas.css';

function FotoPersona() {

    return (
      <div className="FotoPersona">
      {/* imagene de referencia */}
      <img id='FotoPersona' src={require("../Images/PerfilCliente.png")} alt=""/>
        </div>
  );
}

export default FotoPersona;







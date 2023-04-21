import '../Estilos/Personas.css';

function FotoPersona() {

    return (
      <div className="FotoPersona">
      {/* imagene de referencia */}
      <img id='FotoPersona' src={require("../Images/PerfilProveedor.png")} alt=""/>
        </div>
  );
}

export default FotoPersona;
import React, { useState } from 'react';

import '../Estilos/Proveedor.css';

function FileInput({ onChange }) {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onChange(selectedFile);
  }

    return (
      <div className="App">
            <button className="BTNFoto" href="#"> Cambiar Foto </button>

        <div>
          <label className='BTNFoto'>
            <input className='BTNFoto' type="file" accept=".jpg,.png" onChange={handleFileChange} style={{ display: 'none' }} />
            <button className='BTNFoto' onClick={() => document.querySelector('input[type=file]').click()}> Subir </button>
          </label>
          {file && <p>Archivo seleccionado: {file.name}</p>}
        </div>

      </div>

  );
}

export default FileInput;
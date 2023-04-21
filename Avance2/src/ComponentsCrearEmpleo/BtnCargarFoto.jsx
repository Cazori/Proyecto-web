import React, { useState } from 'react';

import '../Estilos/Home.css';

function FileInput({ onChange }) {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onChange(selectedFile);
  }

    return (
      <div className="App">
            <button className="BTNFotoEmpleo" href="#"> Cambiar Foto </button>

        <div>
          <label className='BTNFotoEmpleo'>
            <input className='BTNFotoEmpleo' type="file" accept=".jpg,.png" onChange={handleFileChange} style={{ display: 'none' }} />
            <button className='BTNFotoEmpleo' onClick={() => document.querySelector('input[type=file]').click()}> Cambiar Foto </button>
          </label>
          {file && <p>Archivo seleccionado: {file.name}</p>}
        </div>

      </div>

  );
}

export default FileInput;
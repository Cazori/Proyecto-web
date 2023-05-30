const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const router = require('../Routes');
app.use(router);


app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

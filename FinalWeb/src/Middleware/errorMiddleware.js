const errorMiddleware = (err, req, res, next) => {
   
    console.error(err);
  
   
    res.status(500).json({ error: 'Ha ocurrido un error en el servidor D:' });
  };
  
  module.exports = errorMiddleware;
  
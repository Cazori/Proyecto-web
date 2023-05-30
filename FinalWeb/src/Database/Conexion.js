const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/WebFinal';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectToDatabase() {
  try {
    const client = new MongoClient(uri, options);
    await client.connect();

    console.log('Conexión exitosa a la base de datos');

    const database = client.db('mydatabase');

   

    await client.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

connectToDatabase();

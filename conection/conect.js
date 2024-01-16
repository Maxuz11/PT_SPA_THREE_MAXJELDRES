const {Pool} = require('pg');
const pool = new Pool({
  //indicar los datos para acceder a la BDA
  user: 'roketuser',
  host: 'tarearoket.cv2quftjeoly.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'roket2024',
  port: 5432
});

//funcion para la conexion de consulta de base de datos
async function conexion(query){
    const client = await pool.connect();
    try{
        const result = await client.query(query);
        return result;
    }
    catch(error){
        console.log('Error = ',error);
    }
    finally{
        client.release();
    }
}

module.exports = {
    conexion,
};
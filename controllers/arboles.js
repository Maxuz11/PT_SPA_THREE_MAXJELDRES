const db = require('../conection/conect');

async function ObtArboles(){
    const q = 'SELECT * FROM roket.arboles';
    try{
        const arb = await db.conexion(q);
        return arb.rows;
    }
    catch(error){
        console.error('Error al obtener arboles:', error);
        throw error;
    }
}

async function ObtUbicacionArb(id){
    const q = 'SELECT latitud,longitud FROM roket.ubicaciones WHERE ubicacion_id='+id;
    try{
        const arb = await db.conexion(q);
        return arb.rows;
    }
    catch(error){
        console.error('Error al obtener arboles:', error);
        throw error;
    }
}

async function fotoArbol(id){
    const q = 'SELECT * FROM roket.fotos WHERE arbol_id='+id;
    try{
        const arb = await db.conexion(q);
        return arb.rows;
    }
    catch(error){
        console.error('Error al obtener arboles:', error);
        throw error;
    }
}

async function ObtIdUbicacion(id){
    const q = 'SELECT ubicacion_id FROM roket.arboles WHERE arbol_id='+id;
    try{
        const arb = await db.conexion(q);
        return arb.rows;
    }
    catch(error){
        console.error('Error al obtener arboles:', error);
        throw error;
    }
}


module.exports = {
    ObtArboles,
    ObtUbicacionArb,
    fotoArbol,
    ObtIdUbicacion,
};
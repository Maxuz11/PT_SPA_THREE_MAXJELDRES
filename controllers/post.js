const db = require('../conection/conect');

async function comentar(id,com){
    const q = `INSERT INTO rocket.comentarios arbol_id=${id} comentario='${com}' postulante_id='MJ18645'`;
    
    try{
        const arb = await db.conexion(q);
        let resp = "";
        if(arb.rows){
            resp = "Insertado";
            return resp;
        }
        else{
            resp = "Ops! hubo un error";
            return resp;
        }
    }
    catch(error){
        console.error('Error al insertar:', error);
        return error;
    }
}
async function Iusert(){
    try{
        const q = 'INSERT INTO rocket.postulante postulante_id="MJ18645" nombre="Max" apellido="Jeldres Urrutia" ciudad="Santiago" linkedin="www.linkedin.com/in/max-andré-jeldres-urrutia-2a370621b" guthub_tarea="https://github.com/Maxuz11" telefono="+56933058173" otras_referencias="portafolio: https://maxuz11.github.io/public/"';
        const arb = await db.conexion(q);
        let resp = "";
        if(arb.rows){
            resp="ok";
            return resp;
        }
        else{
            resp ="no insertado";
            return resp;
        }
    }
    catch(error){
        return error;
    }

} 

module.exports={
    comentar,
    Iusert,
}
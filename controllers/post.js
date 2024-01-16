const db = require('../conection/conect');

async function comentar(id,com){
    const q = `INSERT INTO rocket.comentarios (arbol_id, comentario, postulante_id) VALUES (${id}, '${com}', 'MJ18645')`;
   
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
        const q = 'INSERT INTO rocket.postulantes (postulante_id, nombre, apellido, ciudad, linkedin, github_tarea, telefono, otras_referencias) VALUES ("MJ18645", "Max", "Jeldres Urrutia", "Santiago", "www.linkedin.com/in/max-andré-jeldres-urrutia-2a370621b", "https://github.com/Maxuz11/PT_SPA_THREE_MAXJELDRES", "+56933058173", "portafolio: https://maxuz11.github.io/public/")';
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
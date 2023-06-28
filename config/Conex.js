const mysql=require('mysql');

const conex= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'proyectonode'
});
 conex.connect((error)=>{
    if (error) {
        console.error("Error de Conexion en MySQL "+ error);
    return
    }
    console.log("La conexion se realizo exitosamente");
 });

 module.exports=conex;
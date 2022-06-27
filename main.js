// Escribir un bucle que permite simular un  Login de incio de secion//


let usuario= "user";
let pass= "123456";
let username, password;
let condicion;

do{

 username=prompt("Ingrese su usuario");
 password=prompt("Ingrese su contraseña");

 if(username!=usuario || pass!=password){
    alert("Su usuario o contraseña no son validos");
    condicion=true;
 }else{
    condicion=false;
 }


}while(condicion==true);


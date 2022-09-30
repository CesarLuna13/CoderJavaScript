/*let ejemplo = "Ejemplo de variable";
const ejemploConst = "Ejemplo de constante";
let ejemploPrompt = prompt("Ejemplo de ingreso de datos con prompt");
console.log(ejemploPrompt);
alert("Ejemplo de alerta");
*/

function registroUsuario(){
    let nombre = prompt("Ingrese su nombre");
    if(nombre === null){
        return "Evento cancelado"
    }
    while(nombre === ""){
        nombre = prompt("No válido, ingrese su nombre");
    }

    let apellido =  prompt("Ingrese su apellido");
    if(apellido === null){
        return "Evento cancelado"
    }
    while(apellido === ""){
        apellido = prompt("No válido, ingrese su apellido");
    }

    let username = prompt("Ingrese su nombre de usuario");

    if(username === null){
        return "Evento cancelado"
    }
    while(username === ""){
        username = "No válido, ingrese su nombre de usuario"
    }

    return nombre + " " + apellido +  " " + username
}
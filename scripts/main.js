/*let ejemplo = "Ejemplo de variable";
const ejemploConst = "Ejemplo de constante";
let ejemploPrompt = prompt("Ejemplo de ingreso de datos con prompt");
console.log(ejemploPrompt);
alert("Ejemplo de alerta");
*/





//Clase para usuarios en el sistema 
class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

const testUser = new User("test" , "pass");


//Array de usuarios
const users = [testUser];


function crearUsuario(username, password){
    const usuario = new User(username, password);
    return usuario;
}






// Arrays
function arrays(){
    const arrayA = []; //array vacio, priorizar creearlos con const, por seguridad
    let arrayB = [1, 2];
    const arrayC = ["A", "B", "C"];
    const arrayD = [true, false, true];
    const arrayE = [1, false, "C"]; // No muy común
    console.table(arrayC); //Es mejor cuando se quieren ver los elementos de un array

    //Métodos
    arrayC.push("D"); //Agrega elemento en la última posición del array
    arrayC.unshift("a"); //Agrega elemento en la primera posición
    let elemtoQuitado = arrayC.pop()//Elimina el último elemento
    arrayC.shift() //eliminan el último elemento


}
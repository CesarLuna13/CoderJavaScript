//Clase para usuarios en el sistema 
class User{
    constructor(username, password, userid){
        this.username = username;
        this.password = password;
        this.userid = userid;
    }
}


//Clase para pacientes del sistema
class Paciente{
    constructor(nombre, edad, genero, alergias, enfermedadSistemica, telefono, correo){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.alergias =alergias;
        this.enfermedadSistemica = enfermedadSistemica;
        this.telefono = telefono;
        this.correo = correo;
    }
}


//Objeto para testing
const testUser = new User("test" , "pass", "1");
const testPaciente = new Paciente("testPaciente", "23", "M", "Ninguna", "Ninguna", "123456789", "correo@correo.com");



//Array de usuarios
const users = [testUser];


//Función para agregar usuario al sistema
function crearUsuario(username, password){
    const usuario = new User(username, password);
    //return usuario;
    users.push(usuario); //Agrega el nuevo usuario al array de users
}


//

//Evento para hacer login
const btnEnter = document.querySelector("button.buttonEnter");
btnEnter.addEventListener("click", ()=>{
    console.log("Click en boton enter");
})


//Evento para agregar usuario nuevo
const btnAgregarUsuario = document.querySelector("button.buttonNewUser");
btnAgregarUsuario.addEventListener("click", ()=>{
    console.log("Click en agregar usuario");
})










//Notas
//----------------------------------------------------------------------------------------------------------------------------

//Ejemplo de evento




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
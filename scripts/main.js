//Clase para usuarios en el sistema 
class User{
    constructor(username, password, userid){
        this.username = username;
        this.password = password;
        this.userid = userid;
    }
}

//Objeto para testing
const testUser = new User("test" , "pass", "1");




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


    const inputUsername = document.querySelector("#inputUsername");
    const inputPassword = document.querySelector("#inputPassword");

    const userValidation = users.find((user) => user.username === inputUsername.value);
    const passValidation = users.find((pass) => pass.password === inputPassword.value);

    if(userValidation !== undefined && passValidation !== undefined){
        document.querySelector('.bodyIndex').remove();
        sessionStorage.setItem('user', inputUsername.value)
        home();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
        })
    }

    

})


//Evento para agregar usuario nuevo
const btnAgregarUsuario = document.querySelector("button.buttonNewUser");
btnAgregarUsuario.addEventListener("click", ()=>{
    console.log("Click en agregar usuario");
    crearUsuario()
})


function crearUsuario(){
    document.querySelector('.bodyIndex').remove();
}









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
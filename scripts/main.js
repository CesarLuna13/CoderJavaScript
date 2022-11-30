let BodyIndex = document.querySelector(".bodyIndex");


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
        BodyIndex.innerHTML = " ";
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
    crearUsuario()
})


function crearUsuario(){
    document.querySelector('.bodyIndex').remove();
}
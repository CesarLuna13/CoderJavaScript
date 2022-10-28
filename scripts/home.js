
function home(){
    user = sessionStorage.getItem('user');
    console.log("Entra a función")
    let welcomeMessage = document.createElement("section");
    welcomeMessage.innerHTML = `<div class="d-flex flex-row justify-content-around">
    <div><h1 id="welcome">Bienvenido ${user}</h1></div>
    <div>
        <button type="button" class="btn btn-primary">Agregar Paciente</button>
        <button type="button" class="btn btn-primary">Agendar Cita</button>
    </div>
</div>`;
    document.body.append(welcomeMessage);
}


function construccionHome(){
    
}
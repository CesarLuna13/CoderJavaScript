
function home(){
    user = sessionStorage.getItem('user');
    let welcomeMessage = document.createElement("section");
    welcomeMessage.setAttribute('class', 'bodyHome');
    welcomeMessage.innerHTML = `<div class="d-flex flex-row justify-content-around">
    <div><h1 id="welcome">Bienvenido ${user}</h1></div>
    <div>
        <button type="button" id="home" class="btn btn-primary">Home</button>
        <button type="button" id="pacientes" class="btn btn-primary">Pacientes</button>
        <button type="button" id="citas" class="btn btn-primary">Citas</button>
        <button type="button" id="btnAgregarPaciente" class="btn btn-primary">Agregar Paciente</button>
        <button type="button" id="btnAgendarCita" class="btn btn-primary">Agendar Cita</button>
    </div>
</div>`;
    document.body.append(welcomeMessage);


    //Recuperación de pacientes del local storage
    let recuperacionPacientes = JSON.stringify(localStorage.getItem('Pacientes'));


    //Evento para Home
    const btnHome = document.querySelector("#home");
    btnHome.addEventListener("click", ()=>{
        home();
    })


    //Evento para Pacientes
    const btnPacientes =  document.querySelector("#pacientes");
    btnPacientes.addEventListener("click", ()=>{
        //console.log(JSON.parse(recuperacionPacientes));
        mostrarPacientes();
    })

    //Evento para citas
    const btnCitas = document.querySelector("#citas");
    btnCitas.addEventListener("click", ()=>{
        mostrarCitas();
    })

    //Evento para agregar Paciente
    const btnAgregarPaciente = document.querySelector("#btnAgregarPaciente");
    btnAgregarPaciente.addEventListener("click", ()=>{
        agregarPacientes();
    })

    //Evento para agregar cita
    const btnAgendarCita = document.querySelector("#btnAgendarCita");
    btnAgendarCita.addEventListener("click", ()=>{
        agendarCitas();
    })


}
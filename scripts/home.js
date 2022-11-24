
let bodyGeneral = document.querySelector(".BodyGeneral");






function home(){
    console.log("Home");
    bodyGeneral.innerHTML = " ";
    user = sessionStorage.getItem('user');
    var welcomeMessage = document.createElement("section");
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

    var mainSection = document.createElement("section")
    mainSection.setAttribute('class', 'sectionGeneral');
    mainSection.innerHTML = " ";
    document.body.append(mainSection);
    var MainSection = document.querySelector(".sectionGeneral");



    //Evento para Home
    var btnHome = document.querySelector("#home");
    btnHome.addEventListener("click", ()=>{
        home();
    })


    //Evento para Pacientes
    var btnPacientes =  document.querySelector("#pacientes");
    btnPacientes.addEventListener("click", ()=>{
        //console.log(JSON.parse(recuperacionPacientes));
        home();
        mostrarPacientes();
    })

    //Evento para citas
    var btnCitas = document.querySelector("#citas");
    btnCitas.addEventListener("click", ()=>{
        home();
        mostrarCitas();
    })

    //Evento para agregar Paciente
    var btnAgregarPaciente = document.querySelector("#btnAgregarPaciente");
    btnAgregarPaciente.addEventListener("click", ()=>{
        home();
        agregarPacientes();
    })

    //Evento para agregar cita
    var btnAgendarCita = document.querySelector("#btnAgendarCita");
    btnAgendarCita.addEventListener("click", ()=>{
        home();
        agendarCitas();
    })
    


}
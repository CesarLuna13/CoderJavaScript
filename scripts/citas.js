class Citas{
    constructor(id, paciente, fecha){
        this.id = id;
        this.paciente = paciente;
        this.fecha = fecha;
    }

    agendarCita(){
        console.log("Agendar cita");
    }
}

const listCitas = [];

function mostrarCitas(){
    console.log("Funcion para mostrar citas");
    const obtenerCitas = localStorage.getItem('Citas');
    console.log(obtenerCitas);
} 


function nuevaCita(a, b){
    const valID = (listCitas.length + 1).toString();
    const newCita = new Citas(valID, a, b);
    listCitas.push(newCita);
    const almacenCitas = (clave, valor) => {localStorage.setItem(clave, valor)};
    almacenCitas("Citas", JSON.stringify(listCitas));
}

function agendarCitas(){
    document.querySelector('.bodyHome').remove();
    let formCita = document.createElement("section");
    formCita.setAttribute('class', 'bodyHome');
    formCita.innerHTML = `
    <div class="d-flex flex-row justify-content-around">
        <div><h1 id="welcome">Bienvenido ${user}</h1></div>
        <div>
            <button type="button" id="home" class="btn btn-primary">Home</button>
            <button type="button" id="pacientes" class="btn btn-primary">Pacientes</button>
            <button type="button" id="citas" class="btn btn-primary">Citas</button>
            <button type="button" id="btnAgregarPaciente" class="btn btn-primary">Agregar Paciente</button>
            <button type="button" id="btnAgendarCita" class="btn btn-primary">Agendar Cita</button>
        </div>
    </div>

    <div id="index" class="row h-100 justify-content-md-center ">
        <div class="col-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Paciente</label>
                    <input type="text" class="Username form-control" id="Paciente">
                </div>
                <div>
                    <input type="date" class="form-check-input">
                    <label id="Fecha" class="form-check-label" for="exampleCheck1">Fecha</label>
                </div>
                <button type="button" id="agendarCita" class="btn btn-primary buttonEnter">Agendar</button>
            </form>
        </div>
    </div>
    `;
    document.body.append(formCita);

    const btnAgendarCita = document.querySelector("#agendarCita");
    btnAgendarCita.addEventListener("click", () => {
        const paciente = document.querySelector("#Paciente");
        const fecha = document.querySelector("#Fecha");
        console.log(fecha.value)

        nuevaCita(paciente.value, fecha.value);

        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Cita agendada',
            showConfirmButton: false,
            timer: 1500
        })
        agendarCitas();


    })
}
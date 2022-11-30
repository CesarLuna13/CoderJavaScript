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
    const obtenerCitas = localStorage.getItem('Citas');
} 


function nuevaCita(a, b){
    const valID = (listCitas.length + 1).toString();
    const newCita = new Citas(valID, a, b);
    listCitas.push(newCita);
    const almacenCitas = (clave, valor) => {localStorage.setItem(clave, valor)};
    almacenCitas("Citas", JSON.stringify(listCitas));
}

function agendarCitas(){
    let formCita = document.createElement("section");
    formCita.setAttribute('class', 'bodyHome');
    formCita.innerHTML = `


    <div id="index" class="row h-100 justify-content-md-center ">
        <div class="col-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Paciente</label>
                    <input type="text" class="Username form-control" id="Paciente">
                </div>
                <div>
                    <label id="Fecha" class="form-check-label" for="exampleCheck1">Fecha</label>
                    <input type="datetime-local">
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

        nuevaCita(paciente.value, fecha.value);

        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Cita agendada',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            agendarCitas();
        },1500);
        


    })
}
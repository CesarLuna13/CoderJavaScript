
//Clase para pacientes del sistema
class Paciente{
    constructor(id, nombre, edad, genero, alergias, enfermedadSistemica, telefono, correo){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.alergias =alergias;
        this.enfermedadSistemica = enfermedadSistemica;
        this.telefono = telefono;
        this.correo = correo;
    }

}
const listPacientes = [];


function agregarPaciente(no, ed, ge, al, en, te, co){
    console.log("Agregar paciente")
    const valID = (listPacientes.length + 1).toString();
    const newPaciente = new Paciente(valID, no, ed, ge, al, en, te, co);
    listPacientes.push(newPaciente);
    const almacenPacientes = (clave, valor) => { localStorage.setItem(clave, valor)};
    almacenPacientes("Pacientes", JSON.stringify(listPacientes));

}




function mostrarPacientes(){
    console.log("Funcion mostrar pacientes");
    const obtenerPacientes = localStorage.getItem('Pacientes')
    console.log(obtenerPacientes)
}

function agregarPacientes(){
    document.querySelector('.bodyHome').remove();
    console.log("Funcion para agregar pacientes");
    let formPacient = document.createElement("section");
    formPacient.setAttribute('class', 'bodyHome');
    formPacient.innerHTML = `
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
                    <label class="form-label">Nombre</label>
                    <input type="text" class=" form-control" id="Nombre">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Edad</label>
                    <input type="text" class="form-control" id="Edad">
                </div>
                <div class="mb-3">
                    <label class="form-label">Género</label>
                    <input type="text" class="form-control" id="Genero">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Alergias</label>
                    <input type="text" class="form-control" id="Alergias">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Enfermedades sistémicas</label>
                    <input type="text" class="form-control" id="ESistemica">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="Telefono">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Correo</label>
                    <input type="text" class="form-control" id="Correo">
                </div>
                <button type="button" id="agregarPaciente" class="btn btn-primary buttonNewUser">Agregar paciente</button>
            </form>
        </div>
    </div>
    `;
    document.body.append(formPacient);

    const btnNuevoPaciente = document.querySelector("#agregarPaciente");
    
    btnNuevoPaciente.addEventListener("click", () => {
        console.log(btnNuevoPaciente);
        const nombre = document.querySelector("#Nombre");
        const edad = document.querySelector("#Edad");
        const genero = document.querySelector("#Genero");
        const alergias = document.querySelector("#Alergias");
        const eSistemicas = document.querySelector("#ESistemica");
        const telefono = document.querySelector("#Telefono");
        const correo = document.querySelector("#Correo");
        const nuevoPaciente = [nombre.value, edad.value, genero.value, alergias.value, eSistemicas.value, telefono.value, correo.value];

        addPaciente = nuevoPaciente;

        agregarPaciente(nombre.value, edad.value, genero.value, alergias.value, eSistemicas.value, telefono.value, correo.value);

        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Guardado',
            showConfirmButton: false,
            timer: 1500
        })
        agregarPacientes();
    })



}




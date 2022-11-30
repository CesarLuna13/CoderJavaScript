
//Clase para pacientes del sistema
class Paciente{
    constructor(id, nombre, edad, genero, alergias, enfermedadSistemica, telefono, correo){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.alergias = alergias;
        this.enfermedadSistemica = enfermedadSistemica;
        this.telefono = telefono;
        this.correo = correo;
    }

}
const listPacientes = [];


function agregarPaciente(no, ed, ge, al, en, te, co){
    const valID = (listPacientes.length + 1).toString();
    const newPaciente = new Paciente(valID, no, ed, ge, al, en, te, co);
    listPacientes.push(newPaciente);
    const almacenPacientes = (clave, valor) => { localStorage.setItem(clave, valor)};
    almacenPacientes("Pacientes", JSON.stringify(listPacientes));

}




function mostrarPacientes(){
    let tablaPacientes = document.createElement("table");
    tablaPacientes.setAttribute('class', 'tablesPacientes');
    tablaPacientes.innerHTML= " ";
    document.body.append(tablaPacientes);
    const obtenerPacientes = JSON.parse(localStorage.getItem('Pacientes'));
    
    if(obtenerPacientes.length > 0){
        obtenerPacientes.forEach(paciente => tablaPacientes.innerHTML += tablePacientes(paciente));
        document.body.append(tablaPacientes);
    }
}


function tablePacientes(Paciente){

    return `
        <tr>
            <td> ${Paciente.id} </td>
            <td> ${Paciente.nombre} </td>
            <td> ${Paciente.edad} </td>
            <td> ${Paciente.genero} </td>
            <td> ${Paciente.alergias} </td>
            <td> ${Paciente.enfermedadSistemica} </td>
            <td> ${Paciente.telefono} </td>
            <td> ${Paciente.correo} </td>
        </tr>
    `
}

    


function agregarPacientes(){
    let formPacient = document.createElement("section");
    formPacient.setAttribute('class', 'MainSection');
    formPacient.innerHTML = `
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
        const nombre = document.querySelector("#Nombre");
        const edad = document.querySelector("#Edad");
        const genero = document.querySelector("#Genero");
        const alergias = document.querySelector("#Alergias");
        const eSistemicas = document.querySelector("#ESistemica");
        const telefono = document.querySelector("#Telefono");
        const correo = document.querySelector("#Correo");
        const nuevoPaciente = [nombre.value, edad.value, genero.value, alergias.value, eSistemicas.value, telefono.value, correo.value];


        agregarPaciente(nombre.value, edad.value, genero.value, alergias.value, eSistemicas.value, telefono.value, correo.value);

        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Guardado',
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            home();
        },1500);
    })



}




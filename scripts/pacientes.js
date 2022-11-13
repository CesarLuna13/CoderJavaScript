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


    agregarPaciente(){
        console.log("Agregar paciente")
    }
}



const testPaciente = new Paciente("01", "testPaciente", "23", "M", "Ninguna", "Ninguna", "123456789", "correo@correo.com");

//const pacienteJSON = JSON.stringify(testPaciente);
//Arreglos de pacientes
const listPacientes = [testPaciente];

const almacenPacientes = (clave, valor) => { localStorage.setItem(clave, valor)};
almacenPacientes("Pacientes", JSON.stringify(listPacientes));



function mostrarPacientes(){
    console.log("Funcion mostrar pacientes");
}

function agregarPacientes(){
    console.log("Funcion para agregar pacientes");
}





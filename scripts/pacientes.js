//Clase para pacientes del sistema
class Paciente{
    constructor(nombre, edad, genero, alergias, enfermedadSistemica, telefono, correo){
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



const testPaciente = new Paciente("testPaciente", "23", "M", "Ninguna", "Ninguna", "123456789", "correo@correo.com");
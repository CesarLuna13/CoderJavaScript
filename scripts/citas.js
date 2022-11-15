class Citas{
    constructor(paciente, fecha, hora){
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    agendarCita(){
        console.log("Agendar cita");
    }
}

function mostrarCitas(){
    console.log("Funcion para mostrar citas");
} 


function agendarCitas(){
    console.log("Función para agendar citas");
    let formCita = document.createElement("section");
    formCita.innerHTML = `
    <div id="index" class="row h-100 justify-content-md-center ">
        <div class="col-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="Username form-control" id="inputUsername">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                    <input type="date" class="form-check-input">
                    <label class="form-check-label" for="exampleCheck1">Fecha y hora</label>
                <div>

                </div>
                <button type="button" class="btn btn-primary buttonEnter">Enter</button>
                <button type="button" class="btn btn-primary buttonNewUser">Agregar Usuario</button>
            </form>
        </div>
    </div>
    `;
    document.body.append(formCita);
}
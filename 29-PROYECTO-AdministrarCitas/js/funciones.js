import AdminCitas from "./classes/AdminCitas.js";
import UI from "./classes/UI.js";
import Notificacion from "./classes/Notificacion.js";
import { citaObj, editando, setEditando } from "./variables.js";
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from "./selectores.js";

const citasManager = new AdminCitas();
const ui = new UI();

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    // Validar: Extraemos el ID para validar solo los campos de texto
    const { id, ...campos } = citaObj;
    if (Object.values(campos).some(valor => valor.trim() === '')) {
        new Notificacion({ 
            texto: 'Todos los campos son obligatorios', 
            tipo: 'error' 
        });
        return;
    }

    if (editando.value) {
        citasManager.editar({ ...citaObj });
        new Notificacion({ texto: 'Guardado Correctamente', tipo: 'exito' });
        setEditando(false);
        formularioInput.value = 'Registrar Paciente';
    } else {
        citaObj.id = generarId();
        citasManager.agregar({ ...citaObj });
        new Notificacion({ texto: 'Paciente Registrado', tipo: 'exito' });
    }

    ui.imprimirCitas(citasManager);
    formulario.reset();
    reiniciarObjetoCita();
}

export function reiniciarObjetoCita() {
    Object.assign(citaObj, { id: '', paciente: '', propietario: '', email: '', fecha: '', sintomas: '' });
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita);
    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;
    setEditando(true);
    formularioInput.value = 'Guardar Cambios';
}

export function eliminarCita(id) {
    citasManager.eliminar(id);
    ui.imprimirCitas(citasManager);
    new Notificacion({ texto: 'Cita eliminada', tipo: 'exito' });
}
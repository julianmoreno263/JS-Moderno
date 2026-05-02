import { eliminarCita, cargarEdicion } from "../funciones.js";
import { contenedorCitas } from "../selectores.js";

export default class UI {
    imprimirCitas({ citas }) {
        this.limpiarHTML();
        citas.forEach(cita => {
            const divCita = document.createElement('div');
            // ... (Lógica de creación de HTML)
            
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(cita.id);
            
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);
            
            // ... (Append de elementos)
            contenedorCitas.appendChild(divCita);
        });
    }
    // ... limpiarHTML()
}
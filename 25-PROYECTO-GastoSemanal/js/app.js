//variables y selectores
const formulario=document.querySelector("#agregar-gasto")
const gastoListado=document.querySelector("#gastos ul")



//eventos
eventListeners()
function eventListeners(params) {
    document.addEventListener("DOMContentLoaded",preguntarPresupuesto)

    formulario.addEventListener("submit",agregarGasto)
}




//clases

//clase para manejar el presupuesto, en el primer instante al pasar un presupuesto el restante es tambien el mismo presupuesto porque aun no se ha restado nada,por eso en el constructor lo definimos asi
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto)
        this.restante=Number(presupuesto)
        this.gastos=[]
    }

    //aqui vamos almacenando los gastos creando una copia del array gastos con spread operator
    nuevoGasto(gasto){
        this.gastos=[...this.gastos, gasto]
        console.log(this.gastos)
        this.calcularRestante()
    }

    calcularRestante(){
        //usamos primero reduce() para ir capturando en un array lo gastado,se le pasan dos argumentos, el total o acumulado y el objeto actual
        const gastado=this.gastos.reduce((total,gasto)=>total+gasto.cantidad,0)
        this.restante=this.presupuesto-gastado
    }

    eliminarGasto(id){
        //filtramos los gastos,nos traemos todos los gastos menos el que vamos a eliminar
        this.gastos=this.gastos.filter(gasto=>gasto.id !==id)
        this.calcularRestante()

        
    }
}

//clase para manejar la UI
class UI {

    insertarPresupuesto(cantidad){
        //extraer los valores
        const{presupuesto,restante}=cantidad

        //agregar al html
        document.querySelector("#total").textContent=presupuesto
        document.querySelector("#restante").textContent=restante
    }

    imprimirAlerta(mensaje,tipo){
        //crear el div, este proyecto utiliza bootstrap para el estilo
        const divMensaje=document.createElement("div")
        divMensaje.classList.add("text-center","alert")

        if (tipo==="error") {
            divMensaje.classList.add("alert-danger")
        } else {
            divMensaje.classList.add("alert-success")
        }

        //mensaje de error
        divMensaje.textContent=mensaje

        //insertar en el html
        document.querySelector(".primario").insertBefore(divMensaje,formulario)

        //quitar mensaje error despues de 3seg
        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML()//elimina el html previo

        //iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad,nombre,id}=gasto

            //crear un li
            const nuevoGasto=document.createElement("li")
            nuevoGasto.className="list-group-item d-flex justify-content-between align-items-center"
            nuevoGasto.dataset.id=id

            //agregar el html del gasto
            nuevoGasto.innerHTML=`${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`


            //boton para borrar el gasto
            const btnBorrar=document.createElement("button")
            btnBorrar.classList.add("btn","btn-danger","borrar-gasto")
            btnBorrar.innerHTML="Borrar &times;"
            btnBorrar.onclick=()=>{
                eliminarGasto(id)
            }
            nuevoGasto.appendChild(btnBorrar)

            //agregar al html
            gastoListado.appendChild(nuevoGasto)
        });
    }

    limpiarHTML(){
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante){
        document.querySelector("#restante").textContent=restante

    }

    comprobarPresupuesto(presupuestObj){
        const{presupuesto,restante}=presupuestObj
        const restanteDiv=document.querySelector(".restante")

        //comprobamos el 25%
        if ((presupuesto/4)>restante) {
            restanteDiv.classList.remove("alert-success","alert-warning")
            restanteDiv.classList.add("alert-danger")

        } else if((presupuesto/2)>restante){
            //comprobamos si va por el 50% del presupuesto
            restanteDiv.classList.remove("alert-success")
            restanteDiv.classList.add("alert-warning")
        }else{
            //aqui se pone si el restante es mayor al 75%,osea si todavia hay buena plata
            restanteDiv.classList.remove("alert-danger","alert-warning")
            restanteDiv.classList.add("alert-success")
        }

        //si el total es 0 o menor
        if (restante<=0) {
            ui.imprimirAlerta("El presupuesto se ha agotado","error")
            //deshabilitamos el boton
            formulario.querySelector("button[type='submit']").disabled=true
        }
    }
}

//instancias
const ui=new UI()
let presupuesto

//funciones
function preguntarPresupuesto(params) {
    const presupuestoUsuario=prompt("¿Cuál es tu presupuesto?")

    if (presupuestoUsuario==="" || presupuestoUsuario===null || isNaN(presupuestoUsuario) || presupuestoUsuario<=0) {
        window.location.reload()
    }

    //aqui ya hay un presupuesto valido (presupuestoUsuario) por lo que creo una instancia de Presupuesto
    presupuesto=new Presupuesto(presupuestoUsuario)
    console.log(presupuesto)
    ui.insertarPresupuesto(presupuesto)
}


function agregarGasto(e) {
    e.preventDefault()

    //leer los datos del formulario
    const nombre=document.querySelector("#gasto").value
    const cantidad=Number(document.querySelector("#cantidad").value)

    //validar
    if (nombre==="" || cantidad==="") {
        ui.imprimirAlerta("Ambos campos son obligatorios","error")
        return
    }else if(cantidad<=0 || isNaN(cantidad)){
        ui.imprimirAlerta("Cantidad no válida","error")
        return
    }

    //generar un objeto con el gasto, este tipo de objeto se llama object literal enhancement (mejoria objeto literal)
    const gasto={nombre,cantidad, id:Date.now()}

    //añade nuevo gasto
    presupuesto.nuevoGasto(gasto)

    //mostrar mensaje cuando se crea un nuevo gasto y reinicia el formulario
    ui.imprimirAlerta("Gasto agregado correctamente")

    //Imprimir los gastos y el valor del restante
    const {gastos,restante}=presupuesto
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto)



    formulario.reset()

    
}


function eliminarGasto(id) {
    //elimina los gastos del objeto
    presupuesto.eliminarGasto(id)
    const {gastos,restante}=presupuesto
    //elimina los gastos del html
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto)
}
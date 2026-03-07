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
    formulario.reset()

    
}
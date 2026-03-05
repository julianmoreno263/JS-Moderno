//variables y selectores
const formulario=document.querySelector("#agregar-gasto")
const gastoListado=document.querySelector("#gastos ul")



//eventos
eventListeners()
function eventListeners(params) {
    document.addEventListener("DOMContentLoaded",preguntarPresupuesto)
}




//clases

//clase para manejar el presupuesto, en el primer instante al pasar un presupuesto el restante es tambien el mismo presupuesto porque aun no se ha restado nada,por eso en el constructor lo definimos asi
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto)
        this.restante=Number(presupuesto)
        this.gastos=[]
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
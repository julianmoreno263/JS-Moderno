//PROYECTO DE ENVIO DE EMAILS CON JS

//todo el codigo estara dentro del evento DOMContentLoaded porque queremos que se ejecute cuando se haya cargado la pagina

document.addEventListener("DOMContentLoaded",()=>{

    //seleccionamos los inputs del formulario
    const inputEmail=document.querySelector("#email")
    const inputAsunto=document.querySelector("#asunto")
    const inputMensaje=document.querySelector("#mensaje")
    const formulario=document.querySelector("#formulario")

    //asignar eventos, usamos el evento blur que se ejecuta cuando el elemento pierde el foco, y el evento input se dispara cuando se esta escribiendo en el campo,es mas para validacion en tiempo real
    inputEmail.addEventListener("blur",validar)

    inputAsunto.addEventListener("blur",validar)

    inputMensaje.addEventListener("blur",validar)



    //funciones
    function validar(e) {
        //trim() elimina los espacios en blanco que se pudieran poner en el input
        if (e.target.value.trim()==="") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
        } else {
            console.log("hay algo")
            
        }      
    }

    function mostrarAlerta(mensaje,referencia) {
        
        //comprobar si ya existe una alerta
        const alerta=referencia.querySelector(".bg-red-600")
        if (alerta) {
            alerta.remove()
        }

        //generar alerta en HTML, con esta forma,textContet es mas seguro que con innerHTML porque este puede ser susceptible a ataques de csrf
        const error=document.createElement("p")
        error.textContent=mensaje
        error.classList.add("bg-red-600","text-white","p-2","text-center")

        //inyectamos el error con la referencia, la cual es traversing de DOM,que nos ayuda a posiionar esta alerta debajo de cada input, e.target.parentElement seria el div padre del label y el input que disparan el evento en ese momento, entonces en ese div ponemos la alerta y se pone abajo del input correspondiente
        referencia.appendChild(error)
    }

})
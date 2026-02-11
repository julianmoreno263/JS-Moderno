//PROYECTO DE ENVIO DE EMAILS CON JS

//todo el codigo estara dentro del evento DOMContentLoaded porque queremos que se ejecute cuando se haya cargado la pagina

document.addEventListener("DOMContentLoaded",()=>{

    //objeto que valida si el formulario esta diligenciado correctamente y sincronoza los datos
    const email={
        email:"",
        asunto:"",
        mensaje:""
    }

    //seleccionamos los inputs del formulario
    const inputEmail=document.querySelector("#email")
    const inputAsunto=document.querySelector("#asunto")
    const inputMensaje=document.querySelector("#mensaje")
    const formulario=document.querySelector("#formulario")
    const btnSubmit=document.querySelector("#formulario button[type='submit']")
    const btnReset=document.querySelector("#formulario button[type='reset']")
    const spinner=document.querySelector("#spinner")


    //asignar eventos, usamos el evento blur que se ejecuta cuando el elemento pierde el foco, y el evento input se dispara cuando se esta escribiendo en el campo,es mas para validacion en tiempo real
    inputEmail.addEventListener("input",validar)

    inputAsunto.addEventListener("input",validar)

    inputMensaje.addEventListener("input",validar)

    formulario.addEventListener("submit",enviarEmail)

    btnReset.addEventListener("click",e=>{
        e.preventDefault()

        //reiniciar el objeto
        resetFormulario()


    })

    function enviarEmail(e) {
        e.preventDefault()

        spinner.classList.add("flex")
        spinner.classList.remove("hidden")

        console.log("Enviando...")

        setTimeout(() => {
            spinner.classList.remove("flex")
            spinner.classList.add("hidden")

            //reiniciar el objeto
            resetFormulario()

            //crear alerta
            const alertaExito=document.createElement("p")
            alertaExito.classList.add("bg-green-500","text-white","p-2","text-center","rounded-lg","mt-10","font-bold","text-sm","uppercase")
            alertaExito.textContent="Mensaje enviado correctamente"

            formulario.appendChild(alertaExito)

            setTimeout(() => {
                alertaExito.remove()
            }, 3000);
            
        }, 3000);
        
    }



    //funciones
    function validar(e) {
        //trim() elimina los espacios en blanco que se pudieran poner en el input
        if (e.target.value.trim()==="") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
            email[e.target.name]=""
            comprobarEmail()
            return
        } 

        //validar email, el e.target.value es el email que se le va a validar, se niega para que se muestre la alerta cuando la validación no se cumpla
        if(e.target.id==="email" && !validarEmail(e.target.value)){
            mostrarAlerta("El email no es válido", e.target.parentElement)
            email[e.target.name]=""
            comprobarEmail()
            return
        }

        //limpiar alerta
        limpiarAlerta(e.target.parentElement)//esta referencia indica que elemento de los inputs debe capturar

        //asignamos los valores al objeto email
        email[e.target.name]=e.target.value.trim().toLowerCase()
        console.log(email)

        //comprobar el objeto de email
        comprobarEmail()
    }

    function mostrarAlerta(mensaje,referencia) {
        
        limpiarAlerta(referencia)

        //generar alerta en HTML, con esta forma,textContet es mas seguro que con innerHTML porque este puede ser susceptible a ataques de csrf
        const error=document.createElement("p")
        error.textContent=mensaje
        error.classList.add("bg-red-600","text-white","p-2","text-center")

        //inyectamos el error con la referencia, la cual es traversing de DOM,que nos ayuda a posiionar esta alerta debajo de cada input, e.target.parentElement seria el div padre del label y el input que disparan el evento en ese momento, entonces en ese div ponemos la alerta y se pone abajo del input correspondiente
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        //comprobar si ya existe una alerta, pasamos la referencia de la alerta que se va a limpiar
        const alerta=referencia.querySelector(".bg-red-600")
        if (alerta) {
            alerta.remove()
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado=regex.test(email)
        return resultado
    }

    function comprobarEmail(params) {
        if (Object.values(email).includes("")) {
            btnSubmit.classList.add("opacity-50")
            btnSubmit.disabled=true
            return
            
        }

        btnSubmit.classList.remove("opacity-50")
        btnSubmit.disabled=false
        
    }

    function resetFormulario(params) {
        //reiniciar el objeto
        email.email=""
        email.asunto=""
        email.mensaje=""

        formulario.reset()
        comprobarEmail()

    }

})
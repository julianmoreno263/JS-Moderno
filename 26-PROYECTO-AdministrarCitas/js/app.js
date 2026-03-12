

//selectores de los inputs
const pacienteInput=document.querySelector("#paciente")
const propietarioInput=document.querySelector("#propietario")
const emailInput=document.querySelector("#email")
const fechaInput=document.querySelector("#fecha")
const sintomasInput=document.querySelector("#sintomas")

const formulario=document.querySelector("#formulario-cita")

//eventos

//evento para que lo que se vaya escribiendo en el input se guarde en el objeto, hay dos eventos que nos sirven para esto, el input y el change,ambos hacen lo mismo,utilizamos el change. Al escribir en el input y salirme de ese input se ve reflejado lo que uno escribe. Para hacer este evento mas dinamico, creamos una funcion y dentro de ella tomamos el atributo name de cada input entre llaves[] y capturamos los valores con e.target.value,asi es mas general y no nos obliga a hacer por cada propiedad un evento. Asi se detecta desde donde estoy escribiendo y guarda el correspondiente valor en el objeto
pacienteInput.addEventListener("change",datosCita)
propietarioInput.addEventListener("change",datosCita)
emailInput.addEventListener("change",datosCita)
fechaInput.addEventListener("change",datosCita)
sintomasInput.addEventListener("change",datosCita)

formulario.addEventListener("submit",submitCita)

//objeto de cita, lo que el usuario escriba en el formulario se va a ir almacenando en este objeto
const citaObj={
    paciente:"",
    propietario:"",
    email:"",
    fecha:"",
    sintomas:"",
}


//funciones
function datosCita(e){
    citaObj[e.target.name]=e.target.value
}

function submitCita(e) {
    e.preventDefault()

    //validacion del formulario, con Object.values me regresa un array pero solo con los valores del objeto, y con el array method some() podemos validar si hay un string vacio junto con trim() y que nos saque una alerta, osea se validamos de forma mas general. trim() quita espacios en blanco al inicio o al final si el usuario los pone y asi valida el input correctamente
    if (Object.values(citaObj).some(valor=>valor.trim()==="")) {
        console.log("Todos los campos son obligatorios")
        return
    }
}
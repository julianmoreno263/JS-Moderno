

//selectores de los inputs
const pacienteInput=document.querySelector("#paciente")
const propietarioInput=document.querySelector("#propietario")
const emailInput=document.querySelector("#email")
const fechaInput=document.querySelector("#fecha")
const sintomasInput=document.querySelector("#sintomas")

const formulario=document.querySelector("#formulario-cita")

const contenedorCitas=document.querySelector("#citas")

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

//CLASES
class Notificacion{

    //el constructor recibira un objeto
    constructor({texto,tipo}){
        this.texto=texto
        this.tipo=tipo

    }

    mostrar(){
        //crear la notificacion
        const alerta=document.createElement("div")
        alerta.classList.add("text-center","w-full","p-3","text-white","my-5","alert","uppercase","font-bold","text-sm")

        //eliminar alertas duplicadas, utilizamos la forma moderna que es con un ? despues del elemento para preguntar si existe ese elemento,parecido al ternario, esto se llama encadenamiento opcional
        const alertaPrevia=document.querySelector(".alert")
        alertaPrevia?.remove()//si existe ese elemento lo remueve


        //si es de tipo error agrega una clase
        this.tipo==="error" ? alerta.classList.add("bg-red-500") : alerta.classList.add("bg-green-500")

        //le agregamos el texto
        alerta.textContent=this.texto

        //insertamos en el DOM en el div padre que contiene al formulario, en el before se le pasan 2 argumentos,el elemento que queremos insertar (alerta) y el elemento anterior donde lo insertaremos,osea antes del formulario
        formulario.parentElement.insertBefore(alerta,formulario)

        //quitar despues de 5seg
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}


//cada cita es un objeto pero estaran dentro de un array
class AdminCitas{
    constructor(){
        this.citas=[]

        console.log(this.citas)
    }

    agregar(cita){
        this.citas=[...this.citas,cita]
        this.mostrar()

    }

    mostrar(){
        //limpiar html previo
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        //generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            contenedorCitas.appendChild(divCita);
        });    
       
    }
}


//funciones
function datosCita(e){
    citaObj[e.target.name]=e.target.value
}

const citas=new AdminCitas()

function submitCita(e) {
    e.preventDefault()

    //validacion del formulario, con Object.values me regresa un array pero solo con los valores del objeto, y con el array method some() podemos validar si hay un string vacio junto con trim() y que nos saque una alerta, osea se validamos de forma mas general. trim() quita espacios en blanco al inicio o al final si el usuario los pone y asi valida el input correctamente
    if (Object.values(citaObj).some(valor=>valor.trim()==="")) {
        const notificacion=new Notificacion({
            texto:"Todos los campos son obligatorios",
            tipo:"error"
        })

        notificacion.mostrar()

        return
    }

    citas.agregar(citaObj)
}



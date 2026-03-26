

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

let editando=false

//objeto de cita, lo que el usuario escriba en el formulario se va a ir almacenando en este objeto
const citaObj={
    id:generarId(),
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

            //botones de editar y eliminar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            //event handler para el boton de editar,no sirve pasarle un eventlistener porque este boton se crea despues de que js registro los elementos,por lo tanto no lo encontraria,para solucionar esto se utiliza el event handler para darle funcionalidad a un elemento que se crea despues del escaneo de js,estos event handler se nombran siempre empezando con on,osea,onclick,onsubmit,etc.

            //creamos una copia de un objeto con sus datos,en este caso debemos crear una copia del objeto cita que tenga la informacion.
            const clone={...cita}
            btnEditar.onclick=()=>{
                cargarEdicion(clone)
            }

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            //crear contenedor para los botones
            const contenedorBotones=document.createElement("div")
            contenedorBotones.classList.add("flex","justify-between","mt-10")
            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
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

    if (editando) {
        console.log("editando registro")
    }else{
        citas.agregar({...citaObj})
        const notificacionExito=new Notificacion({
        texto:"Paciente registrado",
        tipo:"exito"
        })

        notificacionExito.mostrar()
    }

    formulario.reset()
    reiniciarObjetoCita()
    
}

function reiniciarObjetoCita(params) {
    //reiniciar el objeto
    citaObj.id=generarId()
    citaObj.paciente=""
    citaObj.propietario=""
    citaObj.email=""
    citaObj.fecha=""
    citaObj.sintomas=""

    //otra forma de reiniciar un objeto
    // Object.assign(citaObj,{
    //     id:generarId(),
    //     paciente:"",
    //     propietario:"",
    //     email:"",
    //     fecha:"",
    //     sintomas:"",

    // })
       
}

//esta funcion genera un id unico para pasarselo a cada cita creada,se pueden generar ids con librerias de terceros de npm pero tambien con funciones de js,vamos a hacerlo con funciones
function generarId(params) {
    return Math.random().toString(36).substring(2)+Date.now()
}

//esta funcion toma la cita creada y la carga en el formulario
function cargarEdicion(cita) {
    Object.assign(citaObj,cita)

    pacienteInput.value=cita.paciente
    propietarioInput.value=cita.propietario
    emailInput.value=cita.email
    fechaInput.value=cita.fecha
    sintomasInput.value=cita.sintomas

    editando=true
}


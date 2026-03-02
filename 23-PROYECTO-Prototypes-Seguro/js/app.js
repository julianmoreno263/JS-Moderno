

//constructores
function Seguro(marca,year,tipo) {
    this.marca=marca,
    this.year=year,
    this.tipo=tipo
}

//proto que realiza el calculo de la cotizacion del seguro
Seguro.prototype.cotizarSeguro=function(params) {
    /*
        A.valores para cada tipo de auto
        1=Americano 1.15
        2=Asiatico 1.05
        3=Europeo 1.35

        B.Por cada año que el auto sea mas viejo le reducimos tambien un 3%

        C. si el seguro es basico se multiplica por un 30% mas
           si el seguro es completo se multiplica por un 50% mas

    */

    let cantidad
    const base=2000
    switch (this.marca) {
            case "1":
                cantidad=base*1.15
                break;
            case "2":
                cantidad=base*1.05
                break;
            case "3":
                cantidad=base*1.35
                break;
            default:
                break;
        }
    //leemos el año
    const diferencia=new Date().getFullYear()-this.year
    
    //asi nos aseguramos que el resultado de maximo 2 decimales
    cantidad = Number((cantidad - ((diferencia * 3) * cantidad) / 100).toFixed(2));

    if (this.tipo==="basico") {
        cantidad*=1.30
    } else {
        cantidad*=1.50
    }
    
    console.log(cantidad)
    return cantidad
}

function UI(params) {
    
}

//prototype de UI que llena las opciones de los años,se puede usar una arrow function porque UI no tiene propiedades
UI.prototype.llenarOpciones=()=>{
    const max=new Date().getFullYear()
    const min=max-20

    const selectYear=document.querySelector("#year")
    for (let i = max; i > min; i--) {
        const option = document.createElement("option");
        option.value=i
        option.textContent=i
        selectYear.appendChild(option)
        
    }
}

//prototype para mostrar mensaje de error,se puede usar una arrow function porque UI no tiene propiedades
UI.prototype.mostrarMensaje=(mensaje,tipo)=>{

    const div=document.createElement("div")

    if (tipo==="error") {
        div.classList.add("error")
    } else {
        div.classList.add("correcto")
    }

    div.classList.add("mensaje","mt-10")
    div.textContent=mensaje

    //insertar en el html, con insertBefore utilizamos el nuevo nodo,osea el div que creamos,y el nodo de referencia donde queremos cargarlo
    const formulario=document.querySelector("#cotizar-seguro")//capturamos formulario
    formulario.insertBefore(div,document.querySelector("#resultado"))

    //quitamos el mensaje despues de 3 segundos
    setTimeout(() => {
        div.remove()
    }, 3000);

}

//proto de UI que muestra el total a pagar
UI.prototype.mostrarResultado=(seguro,total)=>{

    const {marca,year,tipo}=seguro
    let textoMarca

    switch (marca) {
        case "1":
            textoMarca="Americano"
            break;
        case "2":
            textoMarca="Asiatico"
            break;
        case "3":
            textoMarca="Europeo"
            break;
        default:
            break;
    }

    //crear el resultado
    const div=document.createElement("div")
    div.classList.add("mt-10")

    div.innerHTML=`
        <p class='header'>Tu Resumen</p>
        <p class='font-bold'>Marca:<span class='font-normal'>  ${textoMarca} </span></p>
        <p class='font-bold'>Año:<span class='font-normal'>  ${year} </span></p>
        <p class='font-bold'>Tipo seguro:<span class='font-normal capitalize'> ${tipo} </span></p>
        <p class='font-bold'>Total:<span class='font-normal'> $ ${total} </span></p>
    
    `
    const resultadoDiv=document.querySelector("#resultado")

    //mostrar el spinner
    const spinner=document.querySelector("#cargando")
    spinner.style.display="block"
    
    setTimeout(() => {
        spinner.style.display="none"//eliminamos el spinner
        resultadoDiv.appendChild(div)//mostramos el resultado
    }, 3000);
}

//creamos instancia de UI
const ui=new UI()


//eventos
document.addEventListener("DOMContentLoaded",()=>{
    ui.llenarOpciones()//llena el select de los años
})


//funcion para validar los campos
eventeListeners()

function eventeListeners(params) {
    const formulario=document.querySelector("#cotizar-seguro")//capturamos formulario
    formulario.addEventListener("submit",cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault()

    //leer la marca seleccionada
    const marca=document.querySelector("#marca").value

    //leer el año seleccionado
    const year=document.querySelector("#year").value


    //leer el tipo de cobertura
    const tipo=document.querySelector("input[name='tipo']:checked").value//asi se capturan los radio buttons

    if (marca==="" || year==="" || tipo==="") {
        ui.mostrarMensaje("Todos los campos son obligatorios","error")
        return
    } 

    ui.mostrarMensaje("Cotizando...","exito")

    //ocultar las cotizaciones previas,seleccionamos el div dentro de #resultado. La primera vez #resultado no tendra un div, por lo que esto es lo que evalua el if,osea si no es nulo osea si tiene un div pues lo elimina, y asi limpia los resultados que haya previamente
    const resultados=document.querySelector("#resultado div")
    if (resultados!=null) {
        resultados.remove()
    }


    //instanciar el seguro
    const seguro=new Seguro(marca,year,tipo)
    const total=seguro.cotizarSeguro()


    //utilizar el proto que va a cotizar el seguro
    ui.mostrarResultado(seguro,total)


    
}
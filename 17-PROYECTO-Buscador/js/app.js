//proyecto buscador de autos

//variables-----------------------------------------------
const marca=document.querySelector("#marca")
const year=document.querySelector("#year")
const minimo=document.querySelector("#minimo")
const maximo=document.querySelector("#maximo")
const puertas=document.querySelector("#puertas")
const transmision=document.querySelector("#transmision")
const color=document.querySelector("#color")

//contenedor para los resultados
const resultado=document.querySelector("#resultado")

const max=new Date().getFullYear()//nos trae el año actual
const min=max-10

//generar un objeto que tendra los parametros de busqueda
const datosBusqueda={
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",

}



//eventos-------------------------------------------------

document.addEventListener("DOMContentLoaded",()=>{

    mostrarAutos(autos)//muestra los autos al cargar

    //llena la opcion de año
    llenarSelect()
})


//event listener para los select de busqueda,evento change se usa en elementos select para cuando se escoge un valor
marca.addEventListener("change",(e)=>{
    datosBusqueda.marca=e.target.value

    filtrarAuto()
})

//aqui toca parsear el año porque en un select vienen como string por defecto,si no lo hacemos no filtra bien porque sale como un array vacio
year.addEventListener("change",(e)=>{
    datosBusqueda.year=parseInt(e.target.value)

    filtrarAuto()

})

minimo.addEventListener("change",(e)=>{
    datosBusqueda.minimo=e.target.value
})

maximo.addEventListener("change",(e)=>{
    datosBusqueda.maximo=e.target.value
})

puertas.addEventListener("change",(e)=>{
    datosBusqueda.puertas=e.target.value
})

transmision.addEventListener("change",(e)=>{
    datosBusqueda.transmision=e.target.value
})

color.addEventListener("change",(e)=>{
    datosBusqueda.color=e.target.value
})





//funciones-----------------------------------------------

//muestra la info de los autos al cargar la pagina
function mostrarAutos(autos) {

    limpiarHTML()//elimina HTML previo

    //array autos esta en el archivo db.js el cual tiene la info de los autos
    autos.forEach(auto=>{
        //destructuring de auto
        const{marca,modelo,year,puertas,transmision,precio,color}=auto
        const autoHTML=document.createElement("p")

        autoHTML.textContent=`

            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `
        //insertar el HTML
        resultado.appendChild(autoHTML)
    })
    
}

//limpiar contenido HTML previo
function limpiarHTML(params) {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}


//Genera los años del select
function llenarSelect(params) {

    for (let i = max; i >=min; i--) {
        const opcion=document.createElement("option")
        opcion.value=i
        opcion.textContent=i
        year.appendChild(opcion)//Agrega las opciones de año al select
        
    }
    
}


//funcion que filtra con base en la busqueda, aqui se usa el concepto de funcion de alto nivel,las cuales son funciones que toman otra funcion, por ejemplo filter() es una funcion de alto nivel (o llamadas de orden superior) porque se le debe pasar una funcion como argumento. Ademas filter me permite hacer encadenamiento,por lo que e smuy util para pasar diferentes funciones al tiempo y asi filtrar multiples valores.
function filtrarAuto(params) {
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear)

    // console.log(resultado)

    mostrarAutos(resultado)
}

function filtrarMarca(auto) {
    const {marca}=datosBusqueda
    if (marca) {
        return auto.marca===marca
    }

    return auto
}

function filtrarYear(auto) {
    const {year}=datosBusqueda
    if (year) {
        return auto.year===year
    }

    return auto
}
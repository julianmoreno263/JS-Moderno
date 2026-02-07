//  Proyecto de carrito de compras

//capturamos el elemento con id "carrito" y el elemento con id  "lista-cursos" y demas elementos

const carrito=document.querySelector("#carrito")//elemento del carrito
const contenedorCarrito=document.querySelector("#lista-carrito tbody")//elemento tbody donde se van a ir almacenando los elementos que enviemos al carrito
const vaciarCarrito=document.querySelector("#vaciar-carrito")//boton que limpia el carito
const listaCursos=document.querySelector("#lista-cursos")//elemento donde estan los cursos del sitio web
let articulosCarrito=[]//array para almacenar los articulos en el carrito


//funcion donde registro todos los eventos
cargarEventListeners()

function cargarEventListeners(params) {
    
    //evento cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener("click",agregarCurso)
}



//-----------------------------------funciones--------------------------------------------------

//agrega un curso al presionar el boton "Agregar al carrito"
function agregarCurso(e) {
    //como el boton "Agregar carrito" es un enlace y su href en este ejemplo solo tiene el simbolo #, el trata de buscar un id y al hacerlo lo que hace es un efecto de irse para arriba cuando se presione el boton,el preventDefault() evita que se ejecute la accion del enlace por defecto y ya no se movera
    e.preventDefault()
    //prevenimos el event bubbling
    if (e.target.classList.contains("agregar-carrito")) {
        //con esto capturo el elemento padre,osea el card para despues con traversing seleccionar la informacion del curso,osea la img,titulo,precio,etc
        const cursoSeleccionado=e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

//lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // console.log(curso)

    //crear un objeto con el contenido del curso actual
    const infoCurso={
        imagen:curso.querySelector("img").src,
        titulo:curso.querySelector("h4").textContent,
        precio:curso.querySelector(".precio span").textContent,
        id:curso.querySelector("a").getAttribute("data-id"),
        cantidad:1
    }

    //agregar elementos al array del carrito,utilizamos el spread operator
    articulosCarrito=[...articulosCarrito, infoCurso]

    console.log(articulosCarrito)

    carritoHTML()
}


//muestra el carrito en el html
function carritoHTML(params) {
    //limpiar el html para que no salgan repetidos los articulos en el carrito
    limpiarHTML()


    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso=>{
        const row=document.createElement("tr")
        row.innerHTML=`
            <td>
                ${curso.titulo}
            </td>
        
        `

        //agrega el html del carrito en el contenedor tbody
        contenedorCarrito.appendChild(row)
    })
    
}


//elimina los cursos del tbody, limpia el html del carrito para que no se repitan cursos a la hora de ir agregandolos
function limpiarHTML(params) {
    //forma lenta
    // contenedorCarrito.innerHTML=""

    //para dar un mejor performance se hace con while
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
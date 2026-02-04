//ejemplo avanzado de DOM scripting con js, al dar click en el boton "Idioma y Moneda" se debe mostrar u ocultar el footer

//seleccionar boton y footer
const btnFlotante=document.querySelector(".btn-flotante")
const footer=document.querySelector(".footer")


//asignamos un evento al boton,podemos pasarle una funcion decarada o una anonima. Lo que muestra u oculta el footer es una clase css llamada "activo" que tiene la propiedad bottom:0 que lo mueve hacia arriba y bottom:-100% que lo mueve abajo
btnFlotante.addEventListener("click",mostrarOcultarFooter)

function mostrarOcultarFooter(params) {
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo")
        btnFlotante.classList.remove("activo")//le cambia el color al boton
        btnFlotante.textContent="Idioma y Moneda"

    } else {
        footer.classList.add("activo")
        btnFlotante.classList.add("activo")
        btnFlotante.textContent="X Cerrar"
    }
    
}
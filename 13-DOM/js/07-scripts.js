//podemos cambiar el css de los elementos del DOM con js, tener en cuenta que por ejemplo en css la propiedad justify-content esta separada con un guion, en js cuando manipula propiedades css de dos palabras se trabajan con calecase,osea justifyContent

const encabezado=document.querySelector("h1")
// console.log(encabezado.style)//style me deja ver todas las propiedades css


//cambiando el color del h1
encabezado.style.backgroundColor="red"
encabezado.style.fontFamily="Arial"
encabezado.style.textTransform="uppercase"

//esta forma esta bien para hacer cosas sencillas,pero lo que se hace realmente es agregar o quitar clases cuando se manipula el css del DOM

//agregar una nueva clase, con cardList vemos la lista de clases de ese elemento y con add le adicionamos una nueva clase, si quiero agregarle una segunda clase la separo con coma
const card=document.querySelector(".card")
card.classList.add("nueva-clase","segunda-clase")

//si quiero quitar una clase utilizo remove()
card.classList.remove(".card")
//traversing del DOM, es ir recorriendo el DOM como si fuera un mapa

//siq uiero recorrer los nodos del elemento nav
const navegacion=document.querySelector("nav")
console.log(navegacion.childNodes)//me muestra los nodos pero tambien se trae los espacios en blanco
console.log(navegacion.children)//muestra solo los elementos html sin espacios


//con children y las posiciones de los nodos es lo que nos permite hacer traversing
const card=document.querySelector(".card")
card.children[1].children[1].textContent="NUEVO TITULO-TRAVERSING DOM"//asi cambio el titulo de esa card
card.children[0].src="img/hacer2.jpg"//asi cambio la imagen con traversing


console.log(card.children[1].children[1].textContent)//asi capturo el texto de esa card


//ahora, para ir navegando de los hijos al padre se utiliza parentElement
console.log(card.parentElement)

//para hacer traversing entre elementos hermanos utilizamos nextElementSibling
console.log(card.nextElementSibling)

//puedo recorrer de atras hacia adelante los hermanos,por ejemplo del 4 al tercero con previousElementSibling
const ultimoCard=document.querySelector(".card:nth-child(4)")//capturo el 4 hijo del card
console.log(ultimoCard.previousElementSibling)//salto al 3 elemento hermano

//tambien puedo recorrer los elemento con las propiedades firstElementChild o lastElementChild

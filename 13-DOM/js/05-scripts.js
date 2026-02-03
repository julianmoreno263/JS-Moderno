//querySelectorAll, es similar a querySelectro,podemos usar el punto para las clases,el signo # para los ids o trabajar directamente con las etiquetas html, la diferencia es que querySelectorAll si retorna todos los elementos que cumplan la condicion del selector,no solo el primero.

//seleccionar todos los elementos con la clase card, aqui retorna una lista de nodos, un nodo es un elemento del DOM,por ejemplo un div,una etiqueta <a>, etc.
const card=document.querySelectorAll(".card")
console.log(card)

//si hay mas de un id igual,aunque eso es una mala practica, de todas formas los devuelve,no marca error
const form=document.querySelectorAll("#formulario")
console.log(form)

//si un elemento no existe devuelve el nodeList vacio
const noExiste=document.querySelectorAll("no-existe")
console.log(noExiste)
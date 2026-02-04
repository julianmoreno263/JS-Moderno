//generar html con javascript, esto se conoce como DOM scripting

//crear un nuevo enlace en la navegacion
const enlace=document.createElement("a")//crear elemento
enlace.textContent="Nuevo Enlace"//añadiendo texto
enlace.href="/nuevo-enlace"//añadiendole el href
// enlace.target="_blank"

//ahora capturamos donde queremos agregar el elemento
// const navegacion=document.querySelector(".navegacion")//capturamos la navegacion
// navegacion.appendChild(enlace)//agregamos el enlace, appendChild inserta al final

//si queremos insertar en una posicion especifica usamos insertBefore(), se le pasa el elemento a insertar y el elemento que estara adelante(llamado nodo de referencia), vamos a insertarlo antes del enlace con indice 1
const navegacion=document.querySelector("nav")
console.log(navegacion.children)
navegacion.insertBefore(enlace,navegacion.children[1])

//si quiero que haga algo el enlace puedo pasarle una funcion

// function miFuncion(params) {
//     alert("Hola")
// }

// enlace.onclick=miFuncion()

//NOTA: LOS FRAMEWORKS HACEN ESTO MAS AUTOMATIZADO,PERO HAY QUE SABER HACERLO ASI EN CASOD E UNA ENTREVISTA Y TAMBIEN PARA SABER COMO TRABAJA ESTO DESDE ATRAS

//crear un card de forma dinamica
const parrafo1=document.createElement("p")
parrafo1.textContent="Concierto"
parrafo1.classList.add("categoria", "concierto")//agregamos clases al parrafo

const parrafo2=document.createElement("p")
parrafo2.textContent="Concierto de rock"
parrafo2.classList.add("titulo")

const parrafo3=document.createElement("p")
parrafo3.textContent="$800 por persona"
parrafo3.classList.add("precio")

//crear div con clase info
const info=document.createElement("div")
info.classList.add("info")

//agregamos los parrafos al div
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//crear la imagen del card
const img=document.createElement("img")
img.src="img/hacer2.jpg"

//creamos el card, es un div padre
const card=document.createElement("div")
card.classList.add("card")

//asignar img al card
card.appendChild(img)

//asignar info
card.appendChild(info)

//AGREGAMOS NUESTRO CARD AL HTML DEL DOM, POR EJEMPLO LO PONEMOS AL INICIO DE LOS DEMAS CARDS
const contenedor=document.querySelector(".hacer .contenedor-cards")
contenedor.insertBefore(card, contenedor.children[0])



console.log(contenedor)
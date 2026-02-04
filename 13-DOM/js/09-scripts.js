//eliminar elementos del DOM


//eliminar el enlace "vender" de la navegacion de la pagina, con remove()
// const primerEnlace=document.querySelector("a")
// primerEnlace.remove()
// console.log(primerEnlace)


//eliminar desde el padre, eliminar el enlace "registro"
const navegacion=document.querySelector(".navegacion")//capturamos el padre
console.log(navegacion.children)//vemos los hijos
navegacion.removeChild(navegacion.children[2])//eliminamos con removeChild
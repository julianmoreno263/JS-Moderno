//seleccionar elemento por el nombre de clase con getElementByClassName
const header=document.getElementsByClassName("header");
console.log(header)


const hero=document.getElementsByClassName("hero")
console.log(hero)

//si una clase existe en varios elementos
const contenedores=document.getElementsByClassName("contenedor")
console.log(contenedores)

//si una clase no existe nos devuelve una coleccion vacia
const noExiste=document.getElementsByClassName("no-existe")
console.log(noExiste)

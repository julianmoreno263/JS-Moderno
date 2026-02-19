//Leer datos del local storage con getItem()


//getItem me trae lo del local storage pero los datoas estan como string,para pasarlos de nuevo a objeto o array  debo usar JSON.parse()
const meses=localStorage.getItem("meses")
console.log(JSON.parse(meses))

const producto=localStorage.getItem("producto")
console.log(JSON.parse(producto))
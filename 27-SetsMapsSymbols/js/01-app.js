//sets en js,es una nueva funcionalidad en js, un set permite crear una lista de valores sin duplicados,cuando se utiliza una lista grande de datos es mucho mejor trabajarla con un set. Los set solo agegan el valor,no utilizan key como los objetos.


const carrito=new Set()

//agregando un valor al set. No se agregan valores repetidos
carrito.add("camisa")
carrito.add("disco1")
carrito.add("disco2")
carrito.add("disco3")

//saber si hay un elemento especiifico en el set
console.log(carrito.has("camisa"))

//borrar un elemento
carrito.delete("disco3")

//limpiar todo el set
// carrito.clear()

//los set son iterables
carrito.forEach(producto=>{
    console.log(producto)
})


//saber el tamaño de un set con size
console.log(carrito.size)

console.log(carrito)

//ejemplo de uso de un set: del siguiente array eliminar los duplicados
const numeros=[10,20,30,40,50,10,20]

const noDuplicados=new Set(numeros)
console.log(noDuplicados)
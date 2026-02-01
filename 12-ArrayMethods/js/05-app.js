const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//metodo find(), nos crea un nuevo array segun la condicion que estemos revisando, findIndex solo trae el indice, pero find trae todo el elemento. Ahora, find solo trae el primer elemento que cumpla la condicion, si hay dos o mas elementos que cumplan la condicion solo trae el primero. Por eso el metodo mas usados de todos es filter, es mas practico.

//Traer un objeto especifico  del array de objetos con forEach
let resultado=""
carrito.forEach((producto,index)=>{
    if(producto.nombre==="Tablet"){
        resultado=carrito[index]
    }
})

console.log(resultado)

//con find()
const resultado2=carrito.find(producto=>producto.nombre==="Tablet")
console.log(resultado2)
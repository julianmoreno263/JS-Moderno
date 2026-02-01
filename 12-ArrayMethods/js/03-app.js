

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//metodo reduce(), es una funcion reductora, por ejemplo si nos piden decirle al usuario del carrito cuanto tiene que pagar.

//con forEach
let total=0
carrito.forEach(producto=>total+= producto.precio)
console.log(total)


//con reduce(), se le deben pasar dos parametros, el primero sera el que va acumulando el total y se le especifica que comienza en 0 en la funcion flecha, y el segundo es el valor de cada producto que se ira pasando a ese total, aqui el cero es el valor que se le especifica al primer parametro
let resultado=carrito.reduce((total,producto)=>total+ producto.precio, 0)
console.log(resultado)
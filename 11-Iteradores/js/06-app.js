//bucles foreach y map, estos son mas propios de javascript y se utilizan mas,los bucles for,while y do-while son comunes no solo en js,pero js utiliza mas el foreach y el map realmente

//foreach, es ideal para recorrer arrays,se eejcuta al menos una vez el numero de elementos del array,osea,si un array tiene 20 elementos el foreach los recorre todos al menos una vez.

//el foreach es mejor para recorrer arrays porque utiliza una funcion flecha que lo hace mas practico, se le puede pasar como parametro el indice

const pendientes=["tarea","comer","proyecto","estudiar js"]

pendientes.forEach((pendiente,indice) => {
    console.log(`${indice}: ${pendiente}`)
});


//otro ejemplo
const carrito=[
    {nombre:"Monitor 20 pulgadas",precio: 500},
    {nombre:"Televisor",precio: 100},
    {nombre:"Tablet",precio: 200,descuento:true},
    {nombre:"Audifonos",precio: 300},
    {nombre:"Teclado",precio: 400},
    {nombre:"Celular",precio: 700},
]

carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`)
});

//map, hace lo mismo que foreach,la diferencia es que map crea un array nuevo,foreach no lo crea,foreach trabaja sobre el mismo array,map crea uno nuevo,por lo que para verlo en consola debemos guardarlo en una variable y se imprime esa variable.

const arrayNuevo=carrito.map(producto => producto.nombre)
   

console.log(arrayNuevo)
//bucles o iteradores, ejecutan un codigo hasta que la condicion se deje de cumplir

//bucle for
// for (let i = 0; i <= 10; i++) {
//     console.log(`Número: ${i}`)    
// }


//pregunta de entrevista: en un for como identificar los numeros pares. Se utiliza el modulo
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`El número ${i} es par`)
//     }else{
//         console.log(`El número ${i} es impar`)
//     }
    
// }

//los bucles sirven para recorrer arrays
const carrito=[
    {nombre:"Monitor 20 pulgadas",precio: 500},
    {nombre:"Televisor",precio: 100},
    {nombre:"Tablet",precio: 200},
    {nombre:"Audifonos",precio: 300},
    {nombre:"Teclado",precio: 400},
    {nombre:"Celular",precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
    
}
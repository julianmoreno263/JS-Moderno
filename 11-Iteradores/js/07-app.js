//bucle for ..of, es una version mas simplificada del for


//array normal
const pendientes=["tarea","comer","proyecto","estudiar js"]

//array de objetos
const carrito=[
    {nombre:"Monitor 20 pulgadas",precio: 500},
    {nombre:"Televisor",precio: 100},
    {nombre:"Tablet",precio: 200,descuento:true},
    {nombre:"Audifonos",precio: 300},
    {nombre:"Teclado",precio: 400},
    {nombre:"Celular",precio: 700},
]

//for of es mas practico
for (const pendiente of pendientes) {
    console.log(pendiente)
}


for (const producto of carrito) {
    console.log(producto)
}
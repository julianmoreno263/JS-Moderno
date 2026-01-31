//break y cotinue, break corta la ejecucion del for, mientras que continue permite interceptar un elemento,identificarlo y continuar la ejecucion,osea podemos interceptar un elemento y saltar la ejecucion de ese elemento y continuar en el que le sigue.


//ejemplo break, detener el codigo cuando este en el numero 5

//bucle for
for (let i = 0; i <= 10; i++) {
    if (i===5) {
        console.log("Este es el 5")
        break
    }
    console.log(`Número: ${i}`)    
}


//ejemplo continue, cuando el bucle este en el 4 se salte el cinco y siga con el 6

//bucle for
for (let i = 0; i <= 10; i++) {
    if (i===5) {
        continue
    }
    console.log(`Número: ${i}`)    
}


//caso de uso de continue,un carrito de compras donde un articulo tendra descuento, el articulo con descuento puede variar,por eso se evalua con un if.
const carrito=[
    {nombre:"Monitor 20 pulgadas",precio: 500},
    {nombre:"Televisor",precio: 100},
    {nombre:"Tablet",precio: 200,descuento:true},
    {nombre:"Audifonos",precio: 300},
    {nombre:"Teclado",precio: 400},
    {nombre:"Celular",precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`)
        continue
    }

    console.log(carrito[i].nombre)
    
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//array methods para realizar la manipulacion de arrays de forma mas automatica, en el mundo real se  trabajan mas los arrays con estos metodos, en una entrevista por ejemplo si nos dicen como validar que el mes de enero existe en el array podemos usar un foreach y un if, pero en el trabajo real ya se utilizan mas los arrays method.

//comprobar si el valor Enero existe en el array meses,(asi se hace en una entrevista)
meses.forEach((mes)=>{
    if(mes==="Enero"){
        console.log("Enero existe en el array")
    }
})

//en la vida real se usa mas un array method asi
const resultado=meses.includes("Enero")
console.log(resultado)

//en un array de objetos ya no nos sirve includes,porque el itera sobre un indice, para hacer lo mismo pero en un array de objetos se utiliza .some()
const existe=carrito.some((producto)=>{
    return producto.nombre=="Celular"
})
console.log(existe)

//.some() tambien sirve con un array de indices
const existe2=meses.some(mes=>mes=="Febrero")
console.log(existe2)
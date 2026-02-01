//spread operator, este no modifica el array original,crea un array nuevo o una copia del original,esto hace parte de la programacion funcional.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//agregar en meses otro mes
const meses2=[...meses,"Agosto"]
console.log(meses2)


//ahora si queremos agregar en el array de objetos un nuevo elemento
const producto={nombre:"Disco duro", precio:800}
const carrito2=[...carrito,producto]
console.log(carrito2)
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//para encontrar el indice o posicion de un elemento en un array de forma manual con un foreach lo hacemos asi:
meses.forEach((mes,i)=>{
    if(mes=="Abril"){
        console.log(`El mes ${mes} está en la posición ${i}`)
    }
})

//se hace lo mismo con findIndex(), si el indice no esta retorna un -1
const indice=meses.findIndex(mes=>mes==="Abril")
console.log(indice)

//con el array de objetos,por ejemplo queremos el indice de los productos que cuestan 100. Shubiera dos o mas elementos con el precio de 100,findIndex solo retorna el indice del primer elemento con ese precio.
const indice2=carrito.findIndex(producto=>producto.precio===100)
console.log(indice2)
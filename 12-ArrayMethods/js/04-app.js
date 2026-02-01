const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//metodo filter(), este crea un nuevo array basado en el parametro que es evaluado,este metodo si nos permite traernos mas de un resultado, por ejemplo si queremos traer los productos que sean mayores a 300, lo hacemos especificando en la funcion una condicion.

//este metodo junto a reduce son los que mas utilizamos
let resultado=carrito.filter(producto=>producto.precio>300)
console.log(resultado)

//si por ejemplo queremos traer todos los productos menos los audifonos
let resultado2=carrito.filter(producto=>producto.nombre !=="Audifonos")
console.log(resultado2)
//un generador es una funcion que retorna un iterador, estas funciones llevan un asterisco antes del nombre, asi sabemos que es una funcion generadora, con los generadores esta la palabra yield que representan los valores que se pueden iterar.

//cuando vemos en cosola el generador observamos que aparece "suspended", esta como dormido,si abrimos el proto del generador vemos el metodo next que es el que permite iterar,entonces cuando itera deja de estar suspendido y despues de iterar vuelve a suspended

function *crearGenerador(params) {
    yield 1
    yield "juan"
    yield 3+3
    yield true
}

// const iterador=crearGenerador()

// console.log(iterador)//aqui esta suspended
// console.log(iterador.next().value)//aqui itera
// console.log(iterador.next().value)//aqui itera
// console.log(iterador.next().value)//aqui itera
// console.log(iterador.next().value)//aqui itera
// console.log(iterador.next().value)//aqui itera
// console.log(iterador)//aqui vuelve a estado suspended

//generador para carrito de compras
function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]
        
    }
}

const carrito=["producto1","producto2","producto3"]

const iterador=generadorCarrito(carrito)

console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

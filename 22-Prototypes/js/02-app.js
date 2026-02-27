

//object constructor es mas dinamico, es mas reutilizable,me puedo crear varias instancias de este object constructor,tambien tendran su proto.
function Cliente(nombre,saldo) {
    this.nombre=nombre,
    this.saldo=saldo
}

//nueva clase
function Empresa(nombre,saldo,categoria) {
    this.nombre=nombre,
    this.saldo=saldo,
    this.categoria
}

//aqui tenemos dos clases, cada clase puede crear sus objetos y para esos objetos les podemos crear funciones especificas, lo que pasa con esta forma de programar es que si es un proyecto grande donde hay varias personas metiendo mano en el codigo llega un momento en que no se sabe que funciones son para que clase de objetos,esto lo soluciona el prototype porque se le puede añadir a cada prototype de esos objetos las funciones que creamos ademas de las que ya tiene y asi no hay confusion.

//funciones
function formatearCliente(cliente) {
    const{nombre,saldo}=cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(cliente) {
    const{nombre,saldo,categoria}=cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`
}

//instancias
const ingrid=new Cliente("ingrid",500)

const ccj=new Empresa("codigo con juan",400,"cursos online")



console.log(formatearCliente(ingrid))





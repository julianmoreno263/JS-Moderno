//prototypes en js, todo objeto tiene un proto el cual tiene funciones exclusivas de ese tipo de objeto

//object literal, es muy estatico
const cliente={
    nombre:"julian",
    saldo:500
}

console.log(cliente)
console.log(typeof(cliente))


//object constructor es mas dinamico, es mas reutilizable,me puedo crear varias instancias de este object constructor,tambien tendran su proto.
function Cliente(nombre,saldo) {
    this.nombre=nombre,
    this.saldo=saldo
}

const ingrid=new Cliente("ingrid",500)
console.log(ingrid)
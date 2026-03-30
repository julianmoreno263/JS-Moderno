//symbols en js, permiten crear una propiedad unica,no hay dos symbols iguales.No se crea con la palabra new,solo se escribe Symbol().

const sym=Symbol()
const sym2=Symbol()


//no hay dos symbols iguales
if (sym===sym2) {
    console.log("son iguales")
} else {
    console.log("son diferentes")
}


const nombre=Symbol()
const apellido=Symbol()

const persona={}

//agregar nombre y apellido como llaves del objeto,como son symbol para acceder a ellos debo utilizar []
persona[nombre]="julian"
persona[apellido]="perez"
persona.tipoCliente="premium"
persona.saldo=500

console.log(persona[nombre])
console.log(persona[apellido])

//las propiedades definidas por un symbol no son iterables
for (const i in persona) {
    console.log(i)
}


//puedo crear una descripcion en el symbol
const nombreCliente=Symbol("Nombre del cliente")
const cliente={}

cliente[nombreCliente]="pedro"

console.log(cliente)
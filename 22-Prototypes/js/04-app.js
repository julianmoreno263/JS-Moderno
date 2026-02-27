
//heredar protoypes entre clases

function Cliente(nombre,saldo) {
    this.nombre=nombre,
    this.saldo=saldo
}

//como nombre y saldo son propiedades que estan en ambas clases podemos hacer que Persona herede estas propiedades de Cliente utilizando el metodo call() pasandole esas propiedades asi:
function Persona(nombre,saldo,telefono) {
    //asi heredamos las propiedades entre los prototypes
    Cliente.call(this,nombre,saldo),
    this.telefono=telefono
}


//asi agregamos una funcion al proto
Cliente.prototype.tipoCliente=function(params) {
    let tipo
    if (this.saldo>10000) {
        tipo="gold"
    }else if(this.saldo>5000){
        tipo="platinum"
    }else{
        tipo="Normal"
    }

    return tipo

}

//agregamos otra
Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre: ${this.nombre} - Saldo: ${this.saldo} - Tipo cliente: ${this.tipoCliente()}`
}

//otra mas que recibe parametros
Cliente.prototype.retiraSaldo=function(retira){
    return this.saldo-=retira
}

//AHORA, PARA PASARLE EL PROTOTYPE DE CLIENTE A PERSONA LO HACEMOS ASI, Y YA PERSONA TENDRA EL MISMO PROTOTYPE DE CLIENTE Y PODRA USAR SUS FUNCIONES
Persona.prototype=Object.create(Cliente.prototype)

//PARA QUE APAREZCA TAMBIEN EL CONSTRUCTOR DE CLIENTE EN PERSONA LO HACEMOS ASI
Persona.prototype.constructor=Cliente

//instanciar Cliente
const pedro=new Cliente("pedro",6000)


//instanciar Persona
const juan=new Persona("juan",3000,323567846)

console.log(pedro)

//como ya heredamos el proto de Cliente en Persona,los objetos tipo Persona pueden utilizar esas funciones que tenga ese proto
console.log(juan.nombreClienteSaldo())


//agregamos una funcion para Persona
Persona.prototype.mostrarTelefono=function(params) {
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())

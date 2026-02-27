

function Cliente(nombre,saldo) {
    this.nombre=nombre,
    this.saldo=saldo
}



//asi agregamos una funcion al prototype de la clase Cliente para esos objetos, se utiliza una function declaration, la funcion que se creo para Cliente es exclusiva de esa clase y no va a estar disponible en otras,por ejemplo la clase Empresa no la va a tener. Ahora la diferencia entre function() y el arrow function ()=>, es que a la hora de buscar las propiedades el function() busca dentro del propio objeto y por eso se utiliza para el prototype del objeto, mientras que el ()=> busca en la ventana global.

//Funciones tradicionales: Cuando llamas a objeto.metodo(), el this dentro de la función apunta automáticamente al objeto que está antes del punto. Esto es vital para acceder a las propiedades de la instancia.

// Arrow functions: Estas funciones tienen un "this léxico". No tienen su propio this; en su lugar, heredan el this del ámbito (scope) donde fueron creadas.


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

//instanciar Cliente
const pedro=new Cliente("pedro",6000)

console.log(pedro.tipoCliente())
console.log(pedro.nombreClienteSaldo())
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo())


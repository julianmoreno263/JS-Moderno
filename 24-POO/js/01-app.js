// antes de ecs6 no habia clases en js, estaban los object constructor que vimos antes y los prototypes como funciones, en 2015 aparecieron las clases que en si son los mismos object constructor y sus protos solo que mejoraron la sintaxis,lo que permite crear objetos mas facil con sus funciones. Hay dos formas de crear clases en js, la class declaration que es la mas popular y la class expression que casi no se usa:

//class expression
// const Cliente2=class{
    
// }

//class declaration
class Cliente{
    constructor(nombre,saldo){
        this.nombre=nombre
        this.saldo=saldo
    }

    //metodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }

    //metodos static, no requieren una instancia,se usan llamando a la clase,pertenecen a la propia clase
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}



//instanciar la clase
const juan=new Cliente("juan",400)
console.log(juan.mostrarInformacion())
console.log(Cliente.bienvenida())//usamos el metodo static

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
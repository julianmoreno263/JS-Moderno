
//herencia en js


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

//herencia
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo)
        this.telefono=telefono
        this.categoria=categoria
    }

    //si una clase hija tiene un metodo llamado igual que en la clase padre,aqui en la clase hija se puede reescribir ese metodo
    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }
}



//instanciar la clase
const juan=new Cliente("juan",400)
const empresa=new Empresa("acme",500,23673535,"aprendizaje js")
console.log(empresa)
console.log(juan.mostrarInformacion())
console.log(empresa.mostrarInformacion())

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())



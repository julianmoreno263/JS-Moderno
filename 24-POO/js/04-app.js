
//modificadores de acceso en js, private

//hay dos modificadores, el public que permite acceder desde la clase o por fuera por medio de una instancia de la clase, y el protected o privado que solo permite acceder a la propiedad o al metodo desde la propia clase.

//para hacer una propiedad que sea privada se le antepone un signo #, (en python son dos guiones bajos __).Si intento acceder a ella por fuera de la clase me saca un error, solo puedo acceder a ella con los metodos de la clase, se pueden crear tambien setter y getter para esto


//class declaration
class Cliente{

    //propiedad nombre es privada
    #nombre

    constructor(nombre,saldo){
        this.#nombre=nombre
        this.saldo=saldo
    }

    //metodos
    mostrarInformacion(){
        return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`
    }

    //metodos static, no requieren una instancia,se usan llamando a la clase,pertenecen a la propia clase
    static bienvenida(){
        return `Bienvenido al cajero`
    }

    //metodos setter y getter para usar la propiedad privada #nombre
    setNombre(nombre){
        this.#nombre=nombre
    }

    getNombre(){
        return this.#nombre
    }
}

const juan=new Cliente("juan",400)
console.log(juan.mostrarInformacion())
console.log(juan.getNombre())
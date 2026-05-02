

  export  const nombreCliente="juan"
  export const ahorro=200

  //clase para exportar
  export class Cliente {
  constructor(nombre,ahorro) {
    this.nombre=nombre
    this.ahorro=ahorro
  }

  mostrarInformacion(){
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
  }
}


  //funciones para exportar
  export function mostrarInformacion(nombre,ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
  }


  export function tieneSaldo(ahorro) {
    if (ahorro>0) {
      console.log("El cliente tiene saldo")
    } else {
      console.log("El cliente no tiene saldo")
    }
  }



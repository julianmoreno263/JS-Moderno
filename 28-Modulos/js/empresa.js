import { Cliente } from "./cliente.js";


//heredamos de Cliente y llamamos a super
export class Empresa extends Cliente {
    constructor(nombre,ahorro,categoria) {
        super(nombre,ahorro)
        this.categoria=categoria
    }

     mostrarInformacion(){
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`
  }
}
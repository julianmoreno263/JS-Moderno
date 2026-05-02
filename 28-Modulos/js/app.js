import { nombreCliente,ahorro, mostrarInformacion, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente,ahorro))


//aqui usamos la clase importada Cliente
const cliente=new Cliente(nombreCliente,ahorro)

console.log(cliente)
console.log(cliente.mostrarInformacion())

//aqui usamos la clase Empresa
const empresa=new Empresa("SAS CONSULTORES",200,"Desarrollo software")
console.log(empresa)
console.log(empresa.mostrarInformacion())


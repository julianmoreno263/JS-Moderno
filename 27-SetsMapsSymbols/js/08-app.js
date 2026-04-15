//nuevos iteradores en js


//elementos iterables
const ciudades=["Londres","New York","Madrid","Paris"]
const ordenes=new Set([123,231,131,102])
const datos=new Map()
datos.set("nombre","juan")
datos.set("profesion","desarrollador")

//iterador por default,tiene la sintaxis mas corta
for (const ciudad of ciudades) {
    console.log(ciudad)
}

for (const orden of ordenes) {
    console.log(orden)
}

for (const dato of datos) {
    console.log(dato)
}

//keys iterator,devuelve las llaves
// for (let key of ciudades.keys()){
//     console.log(key)
// }

// //en el set toma los valores y los asigna como llaves
// for (let key of ordenes.keys()){
//     console.log(key)
// }

// for (let key of datos.keys()){
//     console.log(key)
// }


//values iterator
// for (let value of ciudades.values()){
//     console.log(value)
// }

// for (let value of ordenes.values()){
//     console.log(value)
// }

// for (let value of datos.values()){
//     console.log(value)
// }


//entries iterator
//iterador for of con entries(), sobre una lista
// for (let entry of ciudades.entries()) {
//     console.log(entry)
// }

// //iterador for of con entries(), sobre un set, como el set solo da el valor,el entries() le agrega la llave
// for (let entry of ordenes.entries()) {
//     console.log(entry)
// }

// //iterador for of con entries(), sobre un map, devuelve llave y valor
// for (let entry of datos.entries()) {
//     console.log(entry)
// }





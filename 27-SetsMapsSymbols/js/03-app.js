//maps en js, son listas ordenadas en llave y valor, la diferencia con un objeto es que su performance es mejor al iterarlos, al agregarles o quitarles elementos.

const cliente=new Map()

//agregar elemento al map,con set.
cliente.set("nombre","karen")
cliente.set("tipo","premium")
cliente.set("saldo",300)

//con size veo el tamaño
console.log(cliente.size)

//con has veo si existe un valor en el map
console.log(cliente.has("nombre"))

//para traer un valor usamos get y la clave
console.log(cliente.get("nombre"))

//eliminar con delete
cliente.delete("saldo")

//con clear lo limpio
cliente.clear()

console.log(cliente)


//tambien puedo inicar un map pasandole los elementos asi:
const paciente=new Map([["nombre","paciente"],["cuarto","sin cuarto"],["dr","sin doctor"]])
console.log(paciente)

//los maps son iterables
paciente.forEach(datos=>{
    console.log(datos)
})

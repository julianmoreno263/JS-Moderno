//weakmap(maps debiles),mantiene una serie de datos privados. Estos no son iterables,ni utilizan size.

const producto={
    idProducto:10
}

const weakmap=new WeakMap()

weakmap.set(producto,"monitor")

//si intento traer el objeto producto no lo hace,lo deja oculto,solo me muestra monitor
console.log(weakmap.get(producto))

//puedo borrar con delete
weakmap.delete(producto)

console.log(weakmap)
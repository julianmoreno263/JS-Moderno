//weakset(set debil), en el set normal puedo pasarle cualquier valor,numeros,objetos,strings, pero en el weakset solo puedo pasar objetos. En el weakset no existe el size para saber el tamaño,y no son iterables.

const weakSet=new WeakSet()

const cliente={
    nombre:"julian",
    saldo:100
}

weakSet.add(cliente)


//tambien utiliza has para ver si un elemento existe en el weakset
console.log(weakSet.has(cliente))

console.log(weakSet)
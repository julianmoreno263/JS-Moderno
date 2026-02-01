const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

//metodo concat() se utiliza para unir dos arrays
resultado=meses.concat(meses2)
console.log(resultado)


//con spread operator se hace lo mismo uniendo las copias de ambos arrays
const resultado2=[...meses,...meses2]
console.log(resultado2)

//bucle for in, es parecido al for of, la diferencia es que for of itera sobre arrays, y for in itera sobre objetos

const automovil={
    modelo:"Camaro",
    year:2020,
    motor:"6.0"
}

//for in
for (const propiedad in automovil) {
    console.log(`${automovil[propiedad]}`)
     
}
//operador &&, revisa que se cumplan dos condiciones, nos sirve para evaluar dos condiciones de una vez

const usuario=true
const puedePagar=true

if (usuario && puedePagar) {
    console.log("Si puedes comprar")
}
else if(!puedePagar && !usuario){
    console.log("No puedes comprar")
}
else if(!usuario){
    console.log("Inicia sesion o crea una cuenta")
}
else if(!puedePagar){
    console.log("Fondos insuficientes")
}
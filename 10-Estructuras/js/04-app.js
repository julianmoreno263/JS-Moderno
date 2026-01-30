//condicion else if, si el primer if se cumple se ejecuta su codigo y ya no se ejecuta el else if

const dinero=100
const totalPagar=300
const tarjeta=true
const cheque=true

if (dinero>totalPagar) {
    console.log("Podemos pagar")
}
else if(tarjeta){
    console.log("Si puedo pagar porque tengo tarjeta")
}
else if(cheque){
    console.log("Si tengo un cheque")
} else {
    console.log("Fondos insuficientes")
}
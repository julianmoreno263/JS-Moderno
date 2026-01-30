//switch case, para evaluar multiples condiciones. los case evaluan la condicion y segun esa condicion realizan una accion

const metodoPago="cheque"

switch (metodoPago) {
    case "efectivo":
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case "cheque":
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`)
        break;

    default:
        console.log("Aún no has seleccionado un método de pago o método de pago no soportado")
        break;
}
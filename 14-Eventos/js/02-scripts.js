//eventos con el mouse

const nav=document.querySelector(".navegacion")

//registrar un evento click en el elemento nav
// nav.addEventListener("click",()=>{
//     console.log("Click en nav")
// })

//mouseenter
// nav.addEventListener("mouseenter",()=>{
//     console.log("Entrando en nav")
// })

//mouseout
// nav.addEventListener("mouseout",()=>{
//     console.log("Saliendo del nav")
// })

//mousedown (cuando se presiona el mouse)
// nav.addEventListener("mousedown",()=>{
//     console.log("Presionando el mouse en nav")
// })

//mouseup (cuando suelto el mouse)
// nav.addEventListener("mouseup",()=>{
//     console.log("Soltando el mouse en nav")
// })

//dblclick (cdoble click)
nav.addEventListener("dblclick",()=>{
    console.log("Doble click al mouse en nav")
})